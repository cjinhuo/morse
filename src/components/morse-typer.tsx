import { useEffect, useRef } from 'react'
import { CHAR_STATUS, TYPING_STATUS } from '../constants'
import CharWithMorseCode from './char-with-morse-code'
import { InputtingMorseCodeAtom } from '../atom'
import { useSetAtom } from 'jotai'
import { getOscillatorNodeWithParams, subscribeKeyEventForMorseCode } from '../utils'
import PureTypeChar from './pure-type-char'

export default function MorseTyper() {
  const setCurrentMorseCode = useSetAtom(InputtingMorseCodeAtom)
  const pureTypeCharRef = useRef<{ next: (status: CHAR_STATUS) => void; start: () => void } | null>(null)

  setTimeout(() => {
    pureTypeCharRef.current?.start()
    pureTypeCharRef.current?.next(CHAR_STATUS.correct)
    setInterval(() => {
      pureTypeCharRef.current?.next(CHAR_STATUS.correct)
    }, 1000)
  }, 2000)
  useEffect(() => {
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
      console.log('fragment', fragment)
      setCurrentMorseCode((prev) => ({
        status: TYPING_STATUS.done,
        morseCode: prev.morseCode,
      }))
    })
    return () => {
      singleCharSubscription.unsubscribe()
      fragmentSubscription.unsubscribe()
    }
  }, [])
  return (
    <div>
      <PureTypeChar data='hello' ref={pureTypeCharRef}></PureTypeChar>
    </div>
  )
}
