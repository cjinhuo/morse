import { useLayoutEffect, useRef } from 'react'
import { ALL_MORSE_CODE_MAP } from '../shared/constants'
import type { Session } from '../shared/practice'
import { useCopy } from '../shared/preferences'
import { LATIN_EXAMPLE, LATIN_EXAMPLE_LINES } from '../shared/sentences'

export function CharacterLegend() {
  const t = useCopy()
  return (
    <div className='legend'>
      <span>✓ {t('正确', 'Correct')}</span>
      <span>× {t('错误', 'Error')}</span>
      <span>▰ {t('当前字母', 'Current')}</span>
      <span>○ {t('待输入', 'Pending')}</span>
    </div>
  )
}

export function characterState(session: Session, index: number) {
  if (index === session.typed.length) return 'active'
  if (index > session.typed.length) return 'pending'
  return session.typed[index] === session.text[index] ? 'correct' : 'error'
}

function SignalHint({ code }: { code: string }) {
  const hint = useRef<HTMLSpanElement>(null)
  useLayoutEffect(() => {
    const letter = hint.current?.parentElement
    const line = letter?.closest<HTMLElement>('.reading-line')
    const text = line?.parentElement
    if (!letter || !line || !text) return
    // Only the first row needs extra clearance. Later rows already have a 54 px gap.
    const align = () => text.toggleAttribute('data-leading-hint', letter.offsetTop < 2)
    align()
    const observer = new ResizeObserver(align)
    observer.observe(line)
    return () => {
      observer.disconnect()
      text.removeAttribute('data-leading-hint')
    }
  }, [])
  return (
    <span ref={hint} className='signal-hint' aria-hidden='true'>
      <span className='hint-marks'>
        {Array.from(code, (mark, position) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Marks are identified by their position in a letter.
          <i key={position} className={mark === '-' ? 'dash' : 'dot'} />
        ))}
      </span>
      <svg className='hint-caret' width='10' height='6' viewBox='0 0 10 6' aria-hidden='true'>
        <path d='M0 0l5 6 5-6' />
      </svg>
    </span>
  )
}

export default function PracticeText({ session, morse = false }: { session: Session; morse?: boolean }) {
  const { text } = session
  const lines = text === LATIN_EXAMPLE ? LATIN_EXAMPLE_LINES : [text]
  let position = 0
  return (
    <section className={morse ? 'practice-text morse-text' : 'practice-text latin-text'} aria-label={text}>
      {lines.map((line) => (
        <div className='reading-line' key={position}>
          {Array.from(line.matchAll(/\S+\s*/g), ([word]) => (
            <span className='reading-word' key={position}>
              {Array.from(word, (char) => {
                const index = position++
                const state = characterState(session, index)
                const active = state === 'active'
                return (
                  <span
                    key={index}
                    className='character'
                    data-char={char}
                    data-state={state}
                    aria-current={active ? 'step' : undefined}
                  >
                    {char}
                    {active && morse && <SignalHint code={ALL_MORSE_CODE_MAP[char] || ''} />}
                  </span>
                )
              })}
            </span>
          ))}
        </div>
      ))}
    </section>
  )
}
