import { useEffect } from 'react'
import {
  buffer,
  bufferTime,
  debounceTime,
  filter,
  from,
  fromEvent,
  map,
  race,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs'
import { CHAR_CRITICAL_POINT_TIME, DOT_CRITICAL_POINT_TIME, MAX_KEY_DOWN_TIME_MS, TYPING_STATUS } from '../constants'
import CharWithMorseCode from './char-with-morse-code'
import { CurrentMorseCodeSetAtom } from '../atom'
import { useAtom, useSetAtom } from 'jotai'
import { getOscillatorNodeWithParams, subscribeKeyEventForMorseCode } from '../utils'

export default function MorseTyper() {
  const setCurrentMorseCode = useSetAtom(CurrentMorseCodeSetAtom)
  const keyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    filter((e) => e.code === 'Space' && !e.repeat)
  )
  const keyUpEvent = fromEvent<KeyboardEvent>(document, 'keyup').pipe(filter((e) => e.code === 'Space'))

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const [$singleChar, $fragment] = subscribeKeyEventForMorseCode(getOscillatorNodeWithParams)
    const singleCharSubscription = $singleChar.subscribe((char) => {})
    const fragmentSubscription = $fragment.subscribe((fragment) => {
      setCurrentMorseCode({
        status: TYPING_STATUS.typing,
        morseCode: fragment.join(''),
      })
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
