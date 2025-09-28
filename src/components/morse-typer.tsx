import { useSetAtom } from 'jotai'
import { motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti/dist/presets/crossfire'
import type { TCanvasConfettiInstance } from 'react-canvas-confetti/dist/types'
import { InputtingMorseCodeAtom } from '../atom/atom'
import { CHAR_STATUS, TYPING_STATUS } from '../shared/constants'
import {
  getOscillatorNodeWithParams,
  subscribeKeyEventForMorseCode,
  transformCharToMorseCode,
  transformMorseCodeToChar,
} from '../shared/utils'
import PureTypeChar, { type RefMethodsType } from './pure-type-char'

interface TooltipData {
  x: number
  y: number
  content: string
}

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
} as const

export default function MorseTyper() {
  const setCurrentMorseCode = useSetAtom(InputtingMorseCodeAtom)
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)
  const [currentElementState, setCurrentElementState] = useState<HTMLElement | null | undefined>(undefined)
  const [tooltipData, setTooltipData] = useState<TooltipData>({ x: 0, y: 0, content: '' })

  useEffect(() => {
    if (!pureTypeCharRef.current) return

    let currentElement = pureTypeCharRef.current.start()
    setCurrentElementState(currentElement)
    const [$singleChar, $fragment] = subscribeKeyEventForMorseCode(getOscillatorNodeWithParams)
    const singleCharSubscription = $singleChar.subscribe((char) => {
      setCurrentMorseCode((prev) => {
        return prev.status !== TYPING_STATUS.typing
          ? {
              status: TYPING_STATUS.typing,
              morseCode: char,
            }
          : {
              status: TYPING_STATUS.typing,
              morseCode: prev.morseCode + char,
            }
      })
    })
    const fragmentSubscription = $fragment.subscribe((fragment) => {
      const char = transformMorseCodeToChar(fragment)
      if (char) {
        if (currentElement?.innerHTML === char) {
          ;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
        } else {
          ;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.error, char)
        }
      }

      setCurrentMorseCode((prev) => ({
        status: TYPING_STATUS.done,
        morseCode: prev.morseCode,
      }))
      if (currentElement) {
        if (currentElement.innerText === ' ') {
          ;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
        }
        setCurrentElementState(currentElement)
      } else {
        setCurrentElementState(null)
        singleCharSubscription.unsubscribe()
        fragmentSubscription.unsubscribe()
      }
    })
    return () => {
      singleCharSubscription.unsubscribe()
      fragmentSubscription.unsubscribe()
    }
  }, [setCurrentMorseCode])

  useEffect(() => {
    if (!currentElementState) return
    const content = transformCharToMorseCode(currentElementState.innerHTML)
    if (content) {
      setTooltipData({
        x: currentElementState.offsetLeft + 2,
        y: currentElementState.offsetTop - 36,
        content,
      })
    }
  }, [currentElementState])


// 销毁时，重置状态
  useEffect(() => {
    return () => {
      setCurrentMorseCode((prev) => ({
        status: TYPING_STATUS.idle,
        morseCode: '',
      }))
    }
  }, [setCurrentMorseCode])

  return (
    <div className='relative'>
      {currentElementState === null && <ReactCanvasConfetti autorun={{ speed: 10, duration: 3000 }} />}
      {currentElementState && (
        <motion.div
          animate={{
            opacity: 1,
            x: tooltipData.x,
            y: tooltipData.y,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className='absolute transform -translate-x-1/2 px-2 py-1 text-sm rounded shadow-lg'
          style={{
            backgroundColor: 'var(--color-neutral-4)',
            color: 'var(--color-neutral-8)',
          }}
        >
          {tooltipData.content}
        </motion.div>
      )}
      <PureTypeChar data='HELLO WORLD' ref={pureTypeCharRef} />
    </div>
  )
}
