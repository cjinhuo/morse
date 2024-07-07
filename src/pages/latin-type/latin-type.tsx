import { useEffect, useRef } from 'react'
import PureTypeChar, { type RefMethodsType } from '../../components/pure-type-char'
import { elementAt, filter, fromEvent, map } from 'rxjs'
import { CHAR_STATUS, DELETE_KEYS_SET, LATIN_ALLOWED_INPUT_KEYS_SET } from '../../shared/constants'
import { playTypeWriterSound } from '../../shared/sound'

export default function LatinType() {
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)

  useEffect(() => {
    if (!pureTypeCharRef.current) return
    const $allowedKeyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      map((e) => {
        return {
          repeat: e.repeat,
          // better to use 'Space' than ' '
          key: e.code === 'Space' ? ' ' : e.key,
        }
      }),
      filter((e) => !e.repeat && LATIN_ALLOWED_INPUT_KEYS_SET.has(e.key))
    )
    const $forwardKeyDownEvent = $allowedKeyDownEvent.pipe(filter((e) => !DELETE_KEYS_SET.has(e.key)))
    const $backwardKeyDownEvent = $allowedKeyDownEvent.pipe(filter((e) => DELETE_KEYS_SET.has(e.key)))

    let currentElement = pureTypeCharRef.current.start()
    let lastElement: HTMLElement | null = null
    const forwardKeySubscription = $forwardKeyDownEvent.subscribe((e) => {
      if (e.key === currentElement?.innerHTML) {
        ;[currentElement, lastElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
      } else {
        ;[currentElement, lastElement] = pureTypeCharRef.current!.next(CHAR_STATUS.error, e.key)
      }
      playTypeWriterSound()
      if (!currentElement) {
        console.log('over')
        return
      }
    })

    const backwardKeySubscription = $backwardKeyDownEvent.subscribe((e) => {
      if (!lastElement) {
        return
      }
      playTypeWriterSound()
      ;[currentElement, lastElement] = pureTypeCharRef.current!.prev()
    })

    return () => {
      forwardKeySubscription.unsubscribe()
      backwardKeySubscription.unsubscribe()
    }
  }, [])

  return (
    <div>
      <PureTypeChar data='hello world!' ref={pureTypeCharRef}></PureTypeChar>
    </div>
  )
}
