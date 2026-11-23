import { characterState } from '../../components/pure-type-char'
import { ALL_MORSE_CODE_MAP } from '../../shared/constants'
import { displaySignal } from '../../shared/morse'
import type { Session } from '../../shared/practice'
import { useCopy } from '../../shared/preferences'

export default function MobileConsole({
  session,
  signal,
  complete,
}: {
  session: Session
  signal: string
  complete: boolean
}) {
  const t = useCopy()
  const cursor = session.typed.length
  const target = session.text[cursor]
  const code = ALL_MORSE_CODE_MAP[target] || ''
  const start = Math.max(0, Math.min(cursor - 1, session.text.length - 3))
  const visible = session.text.slice(start, start + 3)
  const guide =
    code === '---'
      ? t('三个长音', 'three dashes')
      : code === '...'
        ? t('三个短音', 'three dots')
        : displaySignal(code, true)
  const slots = signal + code.slice(signal.length)
  return (
    <div className='console phone-console'>
      <div className='phone-toolbar between'>
        <span>
          {t('基础练习', 'Practice')} · {session.text.split(' ')[0]}
        </span>
        <span className='meta accent'>
          {String(Math.min(cursor + 1, session.text.length)).padStart(2, '0')} /{' '}
          {String(session.text.length).padStart(2, '0')}
        </span>
      </div>
      <section className='phone-letters' aria-label={session.text}>
        {Array.from(visible, (char, i) => {
          const index = start + i
          const active = index === cursor
          return (
            <span
              key={index}
              data-char={char}
              data-state={characterState(session, index)}
              aria-current={active ? 'step' : undefined}
            >
              {active && (
                <span className='phone-hint' aria-hidden='true'>
                  {displaySignal(code, true)}
                </span>
              )}
              {char}
            </span>
          )
        })}
      </section>
      <div className='phone-guide'>{target ? `${target} = ${guide}` : t('练习完成', 'Complete')}</div>
      <div className='captured'>
        <div className='between meta'>
          <span>{t('当前输入', 'Current signal')}</span>
          <span className='live live-indicator'>{complete ? t('已完成', 'Complete') : t('接收中', 'Receiving')}</span>
        </div>
        <div
          role='img'
          className='captured-marks'
          aria-label={displaySignal(signal, true) || t('等待输入', 'Waiting for input')}
        >
          {Array.from(slots, (mark, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Slots are positional marks in the live signal.
            <i key={i} data-mark={mark} data-entered={i < signal.length} />
          ))}
        </div>
        <p>{t('松开后停顿半秒，自动确认字符。', 'Release and pause half a second to confirm.')}</p>
      </div>
    </div>
  )
}
