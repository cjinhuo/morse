import { useAtomValue, useSetAtom } from 'jotai'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti/dist/presets/crossfire'
import { InputtingMorseCodeAtom, MorseSentenceAtom } from '../../atom/atom'
import PureTypeChar, { type RefMethodsType } from '../../components/pure-type-char'
import TypingStats from '../../components/typing-stats'
import { useTypingStats } from '../../hooks/useTypingStats'
import { CHAR_STATUS, TYPING_STATUS } from '../../shared/constants'
import {
  getOscillatorNodeWithParams,
  subscribeKeyEventForMorseCode,
  transformCharToMorseCode,
  transformMorseCodeToChar,
} from '../../shared/utils'

interface TooltipData {
  x: number
  y: number
  content: string
}

export default function MorseTyper() {
  const currentSentence = useAtomValue(MorseSentenceAtom)
  const setCurrentMorseCode = useSetAtom(InputtingMorseCodeAtom)
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)
  const [currentElementState, setCurrentElementState] = useState<HTMLElement | null | undefined>(undefined)
  const [tooltipData, setTooltipData] = useState<TooltipData>({ x: 0, y: 0, content: '' })
  const [isStarted, setIsStarted] = useState(false)
  const { stats, startStats, recordInput, finishStats, resetStats } = useTypingStats()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // 重置统计状态
    resetStats()
    setIsStarted(false)
    
    if (!pureTypeCharRef.current) return

    let currentElement = pureTypeCharRef.current.start()
    setCurrentElementState(currentElement)
    let hasStarted = false
    
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
        // 第一次输入时开始统计
        if (!hasStarted) {
          startStats()
          setIsStarted(true)
          hasStarted = true
        }
        
        const expectedChar = currentElement?.innerHTML
        if (expectedChar === char) {
          ;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
          recordInput(CHAR_STATUS.correct, char, expectedChar)
        } else {
          ;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.error, char)
          recordInput(CHAR_STATUS.error, char, expectedChar)
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
        // 输入完成
        finishStats()
        setCurrentElementState(null)
        singleCharSubscription.unsubscribe()
        fragmentSubscription.unsubscribe()
      }
    })
    return () => {
      singleCharSubscription.unsubscribe()
      fragmentSubscription.unsubscribe()
      // 销毁时，重置状态
      setCurrentMorseCode(() => ({
        status: TYPING_STATUS.idle,
        morseCode: '',
      }))
    }
  }, [currentSentence, setCurrentMorseCode, startStats, recordInput, finishStats, resetStats])

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
      {/* 当 currentSentence 变化时，强制重建 PureTypeChar 以重置内部状态 */}
      <PureTypeChar key={currentSentence} data={currentSentence} ref={pureTypeCharRef} />
      {(isStarted || stats.isCompleted) && (
        <TypingStats data={stats} />
      )}
    </div>
  )
}
