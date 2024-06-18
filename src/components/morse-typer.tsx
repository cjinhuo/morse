import { useEffect } from 'react'
import { TYPING_STATUS } from '../constants'
import CharWithMorseCode from './char-with-morse-code'
import { InputtingMorseCodeAtom } from '../atom'
import { useSetAtom } from 'jotai'
import { getOscillatorNodeWithParams, subscribeKeyEventForMorseCode } from '../utils'

export default function MorseTyper() {
  const setCurrentMorseCode = useSetAtom(InputtingMorseCodeAtom)

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
      <CharWithMorseCode char='A'></CharWithMorseCode>
    </div>
  )
}
