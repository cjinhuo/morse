import { ArrowRight, Check, CircleAlert, RotateCcw, X } from 'lucide-react'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { ALL_MORSE_CODE_MAP, NUMBER_MORSE_CODE, SPECIAL_CHAR_MORSE_CODE, WORD_MORSE_CODE } from '../shared/constants'
import { displaySignal } from '../shared/morse'
import type { Score } from '../shared/practice'
import { useCopy } from '../shared/preferences'

function Dialog({
  label,
  drawer,
  children,
  onClose,
}: {
  label: string
  drawer?: boolean
  children: ReactNode
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    dialog?.showModal()
    return () => dialog?.close()
  }, [])
  return (
    <dialog
      ref={ref}
      aria-label={label}
      className={drawer ? 'drawer dialog' : 'result dialog'}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      closedby='any'
    >
      {children}
    </dialog>
  )
}

export function ReferenceDrawer({ current, onClose }: { current?: string; onClose: () => void }) {
  const t = useCopy()
  const categories = [
    [t('字母 A–Z', 'Letters A–Z'), WORD_MORSE_CODE],
    [t('数字', 'Numbers'), NUMBER_MORSE_CODE],
    [t('标点', 'Punctuation'), SPECIAL_CHAR_MORSE_CODE],
  ] as const
  const [tab, setTab] = useState(0)
  const title = t('摩尔斯速查表', 'Morse reference')
  return (
    <Dialog drawer label={title} onClose={onClose}>
      <header className='between'>
        <h2>{title}</h2>
        <button type='button' className='icon-button' aria-label={t('关闭速查表', 'Close reference')} onClick={onClose}>
          <X size={20} />
        </button>
      </header>
      <p className='muted'>{t('先听节奏，再记字符。', 'Listen to the rhythm, then learn the character.')}</p>
      <div className='reference-tabs'>
        {categories.map(([name], index) => (
          <button key={name} type='button' aria-pressed={index === tab} onClick={() => setTab(index)}>
            {name}
          </button>
        ))}
      </div>
      <dl className='reference-grid'>
        {Object.entries(categories[tab][1]).map(([letter, code]) => (
          <div key={letter} data-current={letter === current}>
            <dt>{letter}</dt>
            <dd>{displaySignal(code)}</dd>
          </div>
        ))}
      </dl>
      <footer className='reference-footer'>
        <span className='meta'>SHORT · LONG · PAUSE</span>
        <p>
          {t(
            '轻点为点，长按为划。字符之间停顿半秒。',
            'Tap for a dot, hold for a dash. Pause half a second between characters.'
          )}
        </p>
      </footer>
    </Dialog>
  )
}

export function InvalidSignal({
  code,
  target,
  onReference,
}: {
  code: string
  target: string
  onReference: () => void
}) {
  const t = useCopy()
  return (
    <div role='alert' className='invalid-signal'>
      <h3>
        <CircleAlert size={18} />
        {t('这组点划暂时无法识别', 'Unrecognized signal')}
      </h3>
      <p>
        {t('已输入 ', 'Received ')}
        {displaySignal(code, true)}
        {t(' 。停顿后重新尝试，或打开速查表。', '. Pause and try again, or open the reference.')}
      </p>
      <div className='between'>
        <span className='meta'>
          {t('目标 ', 'Target ')}
          {target}：{displaySignal(ALL_MORSE_CODE_MAP[target] || '', true)}
        </span>
        <button type='button' onClick={onReference}>
          {t('查看速查表 →', 'Open reference →')}
        </button>
      </div>
    </div>
  )
}

export function SessionResult({
  score,
  lesson,
  onReplay,
  onNext,
  onClose,
}: {
  score: Score
  lesson: string
  onReplay: () => void
  onNext: () => void
  onClose: () => void
}) {
  const t = useCopy()
  const title = t('信号已送达。', 'Signal delivered.')
  return (
    <Dialog label={title} onClose={onClose}>
      <span className='result-check'>
        <Check size={26} />
      </span>
      <span className='meta live'>TRANSMISSION COMPLETE</span>
      <h2>{title}</h2>
      <p>
        {t('你完成了 ', 'You finished ')}
        {lesson}
        {t(' 练习，继续保持这个节奏。', ' practice. Keep that rhythm.')}
      </p>
      <dl className='result-stats'>
        {[
          [t('准确率', 'Accuracy'), `${score.accuracy}%`],
          [t('输入速度', 'Typing speed'), `${score.wpm} WPM`],
          [t('用时', 'Time'), score.time],
        ].map(([name, value]) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className='actions'>
        <button type='button' className='button' onClick={onReplay}>
          <RotateCcw size={16} />
          {t('再练一次', 'Try again')}
        </button>
        <button type='button' className='button primary' onClick={onNext}>
          <ArrowRight size={16} />
          {t('下一组练习', 'Next exercise')}
        </button>
      </div>
    </Dialog>
  )
}
