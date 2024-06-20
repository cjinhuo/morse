import { useEffect, useRef } from 'react'
import { CHAR_STATUS, TYPING_STATUS, WORD_MORSE_CODE } from '../constants'
import CharWithMorseCode from './char-with-morse-code'
import { InputtingMorseCodeAtom } from '../atom'
import { useSetAtom } from 'jotai'
import { getOscillatorNodeWithParams, subscribeKeyEventForMorseCode, transformMorseCodeToChar } from '../utils'
import PureTypeChar, { type RefMethodsType } from './pure-type-char'
import { fromEvent } from 'rxjs'

export default function MorseTyper() {
  const setCurrentMorseCode = useSetAtom(InputtingMorseCodeAtom)
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)

  useEffect(() => {
    if (!pureTypeCharRef.current) return

    let currentMorseCode = pureTypeCharRef.current.start()
    const [$singleChar, $fragment] = subscribeKeyEventForMorseCode(getOscillatorNodeWithParams)
    fromEvent<KeyboardEvent>(document, 'click').subscribe((e) => {
      console.log('e.code', e.code)
      if (e.code === 'enter') {
        // currentMorseCode = pureTypeCharRef.current!.start()
      }
    })
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
      const char = transformMorseCodeToChar(fragment)
      if (char && currentMorseCode?.innerHTML === char) {
        currentMorseCode = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
      } else {
        currentMorseCode = pureTypeCharRef.current!.next(CHAR_STATUS.error)
      }
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
      <PureTypeChar data='HELLO' ref={pureTypeCharRef}></PureTypeChar>
    </div>
  )
}
