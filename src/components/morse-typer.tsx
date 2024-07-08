import { useEffect, useRef } from 'react'
import { CHAR_STATUS, TYPING_STATUS } from '../shared/constants'
import { InputtingMorseCodeAtom } from '../atom/atom'
import { useSetAtom } from 'jotai'
import { getOscillatorNodeWithParams, subscribeKeyEventForMorseCode, transformMorseCodeToChar } from '../shared/utils'
import PureTypeChar, { type RefMethodsType } from './pure-type-char'
import { motion } from 'framer-motion'

export default function MorseTyper() {
  const setCurrentMorseCode = useSetAtom(InputtingMorseCodeAtom)
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)

  useEffect(() => {
    if (!pureTypeCharRef.current) return

    let currentElement = pureTypeCharRef.current.start()
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
        // skip when encounter space char
        if (currentElement.innerText === '') {
          ;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
        }
      } else {
        singleCharSubscription.unsubscribe()
        fragmentSubscription.unsubscribe()
        console.log('ALL over')
      }
    })
    return () => {
      singleCharSubscription.unsubscribe()
      fragmentSubscription.unsubscribe()
    }
  }, [])
  return (
    <div>
      <PureTypeChar data='HELLO WORLD' ref={pureTypeCharRef}></PureTypeChar>
    </div>
  )
}
