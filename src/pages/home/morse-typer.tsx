import { useAtomValue } from 'jotai'
import { ArrowUpRight, BookOpen, CornerDownLeft, Hand, Keyboard, RefreshCw } from 'lucide-react'
import { useLayoutEffect, useState } from 'react'
import { SoundToggle } from '../../components/header/header'
import { InvalidSignal, ReferenceDrawer, SessionResult } from '../../components/practice-feedback'
import PracticeText, { CharacterLegend } from '../../components/pure-type-char'
import { useMorseKey } from '../../hooks/useMorseKey'
import type { useTypingStats } from '../../hooks/useTypingStats'
import { ALL_MORSE_CODE_REVERSE_MAP } from '../../shared/constants'
import { displaySignal } from '../../shared/morse'
import { soundAtom, useCopy } from '../../shared/preferences'
import { MORSE_EXAMPLE } from '../../shared/sentences'
import MobileConsole from './input-mask'

export default function MorseTyper({
  practice,
  mobile,
}: {
  practice: ReturnType<typeof useTypingStats>
  mobile: boolean
}) {
  const t = useCopy()
  const sound = useAtomValue(soundAtom)
  const { session, dispatch, score, example, complete, dismissed } = practice
  const { text } = session
  const [reference, setReference] = useState(false)
  const [invalid, setInvalid] = useState('')
  const index = session.typed.length
  const target = text[index] || ''
  const classic = text === MORSE_EXAMPLE
  const exampleSignal = example && classic && target === 'O' ? (mobile ? '--' : '') : null
  const { stageRef, buttonRef, pressed, signal } = useMorseKey({
    disabled: reference || complete,
    sound,
    exampleSignal,
    externalSession: practice.externalSession,
    onStart: () => dispatch({ type: 'start', at: Date.now() }),
    onCommit(code) {
      const decoded = ALL_MORSE_CODE_REVERSE_MAP[code]
      if (!decoded) {
        setInvalid(code)
        return
      }
      setInvalid('')
      dispatch({ type: 'input', mode: 'morse', value: decoded, at: Date.now() })
    },
  })
  useLayoutEffect(() => {
    if (!mobile && !complete && document.activeElement?.matches('header a[aria-current="page"]')) {
      buttonRef.current?.focus({ preventScroll: true })
    }
  }, [buttonRef, mobile, complete])
  const next = (
    <button className='text-button' type='button' onClick={() => dispatch({ type: 'next' })}>
      <RefreshCw size={mobile ? 16 : 15} />
      {t('换一组', 'Next set')}
    </button>
  )
  const lookup = (
    <button className='text-button accent' type='button' onClick={() => setReference(true)}>
      <BookOpen size={16} />
      {mobile ? t('速查表', 'Reference') : t('摩尔斯速查表', 'Morse reference')}
      {!mobile && <ArrowUpRight size={15} />}
    </button>
  )
  const transmit = (
    <button
      type='button'
      ref={buttonRef}
      className='transmit-key'
      aria-pressed={pressed}
      onContextMenu={(e) => e.preventDefault()}
      onClick={complete ? () => dispatch({ type: 'dismissed', value: false }) : undefined}
    >
      {mobile ? <Hand size={24} /> : <Keyboard size={20} />}
      {complete
        ? t('查看结果', 'View results')
        : mobile
          ? t('按住发报', 'Hold to transmit')
          : example
            ? t('按下 SPACE 继续', 'Press SPACE to continue')
            : t('按下 SPACE 发报', 'Press SPACE to transmit')}
      {!mobile && <CornerDownLeft size={18} className='return-icon' />}
    </button>
  )
  const lesson = classic ? t('经典电文', 'Classic telegram') : text.length > 18 ? t('长句', 'long sentence') : text
  return (
    <>
      <div ref={stageRef} className='morse-stage'>
        <div className='atmosphere' aria-hidden='true'>
          <i />
          <i />
          <i />
        </div>
        {mobile ? (
          <>
            <MobileConsole session={session} signal={signal} complete={complete} />
            {transmit}
            <div className='mobile-actions between'>
              {next}
              {lookup}
            </div>
          </>
        ) : (
          <>
            <div className='console morse-console'>
              <div className='toolbar between'>
                <div className='toolbar-source'>
                  <span className='meta'>{String(practice.round + 1).padStart(2, '0')}</span>
                  <span>
                    {classic
                      ? t('经典电文', 'Classic telegram')
                      : text.length > 18
                        ? t('长句练习', 'Long sentence')
                        : t('基础练习', 'Basic practice')}
                  </span>
                  <span className='meta'>/</span>
                  <span className='set-name'>
                    {classic ? '1844' : text.split(' ')[0]}
                    {example && t(' · 示例状态', ' · Example')}
                  </span>
                </div>
                <div className='toolbar-controls'>
                  <SoundToggle />
                  {next}
                </div>
              </div>
              <div className='morse-reading'>
                <p className='meta reading-status'>
                  {complete ? t('练习完成', 'Complete') : t('正在输入', 'Transmitting')} · {t('第 ', '')}
                  {Math.min(index + 1, text.length)} / {text.length}
                  {t(' 个字符', ' characters')}
                </p>
                <PracticeText session={session} morse />
              </div>
              <CharacterLegend />
              <div className='space-action'>
                {transmit}
                <div className='timing'>
                  <span>{t('•  轻点 = 点', '•  Tap = dot')}</span>
                  <span>{t('━  长按 = 划', '━  Hold = dash')}</span>
                  <span>{t('停顿半秒 = 下一字符', 'Pause ½ s = next letter')}</span>
                </div>
              </div>
              <div className='session-strip between'>
                <span className='meta live live-indicator'>
                  {complete ? 'COMPLETE' : example || session.elapsedMs !== null ? 'TRANSMITTING' : 'READY'}{' '}
                  {displaySignal(signal, true)}
                </span>
                <span className='meta'>
                  {t('SPACE 发报   /   停顿自动确认', 'SPACE to send   /   Pause to confirm')}
                </span>
              </div>
            </div>
            <div className='between shortcuts'>
              <span>{t('戴上耳机，听见每个点划的节奏。', 'Put on headphones to hear the rhythm of each signal.')}</span>
              {lookup}
            </div>
          </>
        )}
        {invalid && <InvalidSignal target={target} code={invalid} onReference={() => setReference(true)} />}
      </div>
      {mobile && (
        <p className='mobile-breathing meta'>
          {complete
            ? t('练习完成', 'Complete')
            : example
              ? t('练习中 · 示例状态', 'Practice · Example')
              : t('练习中', 'In progress')}
        </p>
      )}
      {reference && <ReferenceDrawer current={target} onClose={() => setReference(false)} />}
      {complete && !dismissed && (
        <SessionResult
          score={score}
          lesson={lesson}
          onClose={() => dispatch({ type: 'dismissed', value: true })}
          onReplay={() => dispatch({ type: 'replay' })}
          onNext={() => dispatch({ type: 'next' })}
        />
      )}
    </>
  )
}
