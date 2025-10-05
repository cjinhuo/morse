import { useAtomValue } from 'jotai'
import { useEffect, useRef } from 'react'
import { filter, fromEvent, map } from 'rxjs'
import { LatinSentenceAtom } from '../../atom/atom'
import PureTypeChar, { type RefMethodsType } from '../../components/pure-type-char'
import { CHAR_STATUS, DELETE_KEYS_SET, LATIN_ALLOWED_INPUT_KEYS_SET } from '../../shared/constants'
import { playErrorSound, playTypeWriterSound } from '../../shared/sound'

export default function LatinType() {
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)
  const currentLatinSentence = useAtomValue(LatinSentenceAtom)
  useEffect(() => {
    document.title = 'Latin Type'
  }, [])
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
      if (e.key === currentElement?.innerText) {
        ;[currentElement, lastElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
        playTypeWriterSound()
      } else {
        ;[currentElement, lastElement] = pureTypeCharRef.current!.next(CHAR_STATUS.error, e.key)
        playErrorSound()
      }

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
  }, [currentLatinSentence])

  return (
    <div>
      <PureTypeChar key={currentLatinSentence} data={currentLatinSentence} ref={pureTypeCharRef} />
    </div>
  )
}
