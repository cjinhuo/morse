import { useAtomValue } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { filter, fromEvent, map } from 'rxjs'
import { LatinSentenceAtom } from '../../atom/atom'
import PureTypeChar, { type RefMethodsType } from '../../components/pure-type-char'
import TypingStats from '../../components/typing-stats'
import { useTypingStats } from '../../hooks/useTypingStats'
import { CHAR_STATUS, DELETE_KEYS_SET, LATIN_ALLOWED_INPUT_KEYS_SET } from '../../shared/constants'
import { playErrorSound, playTypeWriterSound } from '../../shared/sound'

export default function LatinType() {
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)
  const currentLatinSentence = useAtomValue(LatinSentenceAtom)
  const [isStarted, setIsStarted] = useState(false)
  const { stats, startStats, recordInput, recordBackspace, finishStats, resetStats } = useTypingStats()

  useEffect(() => {
    document.title = 'Latin Typer'
  }, [])
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // 重置统计状态
    resetStats()
    setIsStarted(false)

    if (!pureTypeCharRef.current) return
    const $allowedKeyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      map((e) => {
        // 对空格键进行特殊处理，阻止冒泡
        if (e.code === 'Space') {
          e.preventDefault()
          e.stopPropagation()
        }
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
    let hasStarted = false

    const forwardKeySubscription = $forwardKeyDownEvent.subscribe((e) => {
      // 第一次输入时开始统计
      if (!hasStarted) {
        startStats()
        setIsStarted(true)
        hasStarted = true
      }

      const expectedChar = currentElement?.innerText

      if (e.key === expectedChar) {
        ;[currentElement, lastElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
        recordInput(CHAR_STATUS.correct, e.key, expectedChar)
        playTypeWriterSound()
      } else {
        ;[currentElement, lastElement] = pureTypeCharRef.current!.next(CHAR_STATUS.error, e.key)
        recordInput(CHAR_STATUS.error, e.key, expectedChar)
        playErrorSound()
      }

      if (!currentElement) {
        // 输入完成
        finishStats()
        console.log('Typing completed!')
        return
      }
    })

    const backwardKeySubscription = $backwardKeyDownEvent.subscribe((e) => {
      if (!lastElement) {
        return
      }
      recordBackspace()
      playTypeWriterSound()
        ;[currentElement, lastElement] = pureTypeCharRef.current!.prev()
    })

    return () => {
      forwardKeySubscription.unsubscribe()
      backwardKeySubscription.unsubscribe()
    }
    // 当currentLatinSentence变化时，重置currentElement和lastElement
  }, [currentLatinSentence, startStats, recordInput, recordBackspace, finishStats, resetStats])

  return (
    <div>
      <PureTypeChar key={currentLatinSentence} data={currentLatinSentence} ref={pureTypeCharRef} />
      {(isStarted || stats.isCompleted) && (
        <TypingStats data={stats} />
      )}
    </div>
  )
}
