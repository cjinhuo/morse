import { useAtomValue } from 'jotai'
import { RefreshCw, RotateCcw } from 'lucide-react'
import { useEffect, useEffectEvent, useRef } from 'react'
import { SoundToggle } from '../../components/header/header'
import PageHeading from '../../components/page-heading'
import { SessionResult } from '../../components/practice-feedback'
import PracticeText, { CharacterLegend } from '../../components/pure-type-char'
import TypingStats from '../../components/typing-stats'
import useMobile from '../../hooks/useMobile'
import { useTypingStats } from '../../hooks/useTypingStats'
import { LATIN_ALLOWED_INPUT_KEYS_SET } from '../../shared/constants'
import { soundAtom, useCopy } from '../../shared/preferences'
import { LATIN_EXAMPLE } from '../../shared/sentences'
import { playTypingSound } from '../../shared/sound'

const sample = LATIN_EXAMPLE.slice(0, 18).replace('dead', 'dexd')
const caretKeys = new Set(['Home', 'End', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'])

function moveCaret(input: HTMLTextAreaElement) {
  const end = input.value.length
  if (input.selectionStart !== end || input.selectionEnd !== end) input.setSelectionRange(end, end)
}

export default function LatinType() {
  const practice = useTypingStats('latin', LATIN_EXAMPLE, sample)
  return <EnglishPractice key={practice.round} practice={practice} />
}

function EnglishPractice({ practice }: { practice: ReturnType<typeof useTypingStats> }) {
  const t = useCopy()
  const mobile = useMobile()
  const sound = useAtomValue(soundAtom)
  const editor = useRef<HTMLTextAreaElement>(null)
  const { session, dispatch, score, example, focus, dismissed, complete } = practice
  const { text } = session
  useEffect(() => {
    if (!mobile) editor.current?.focus({ preventScroll: true })
  }, [mobile])
  const keydown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch({ type: 'focus', value: false })
      return
    }
    if (complete || event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey || event.isComposing)
      return
    const input = editor.current
    if (input && event.target === input) {
      if (event.key === 'Delete') {
        event.preventDefault()
        dispatch({ type: 'backspace', at: Date.now() })
      } else if (event.key === 'Backspace' || event.key.length === 1) {
        moveCaret(input)
      }
      return
    }
    if (
      event.target instanceof Element &&
      event.target.closest('input,textarea,select,button,a,summary,dialog,[contenteditable=true]')
    )
      return
    if (event.key === 'Backspace' || event.key === 'Delete') {
      event.preventDefault()
      dispatch({ type: 'backspace', at: Date.now() })
    } else if (event.key.length === 1 && LATIN_ALLOWED_INPUT_KEYS_SET.has(event.key)) {
      event.preventDefault()
      const accepted = dispatch({ type: 'input', mode: 'latin', value: event.key, at: Date.now() })
      if (accepted && sound) playTypingSound(event.key === text[session.typed.length])
    }
  })
  useEffect(() => {
    document.addEventListener('keydown', keydown)
    return () => document.removeEventListener('keydown', keydown)
  }, [])
  return (
    <section className={`page latin-page${focus ? ' focus-mode' : ''}`}>
      <PageHeading
        title={t('英文打字', 'English typing')}
        description={t(
          '跟随高亮字符输入，使用 Backspace 修改。',
          'Type the highlighted character. Use Backspace to correct a mistake.'
        )}
        eyebrow='TYPE / 02'
      />
      <div className='latin-stage'>
        <div className='atmosphere' aria-hidden='true'>
          <i />
        </div>
        <div className='console latin-console'>
          <div className='toolbar between'>
            <div className='toolbar-source'>
              <span className='meta'>EN</span>
              <span>{t('句子练习', 'Sentence practice')}</span>
              {example && <span className='meta'>{t('/ 示例状态', '/ Example')}</span>}
            </div>
            <div className='toolbar-controls'>
              <SoundToggle />
              <button
                type='button'
                className='icon-button'
                aria-label={t('换一组', 'Next set')}
                onClick={() => dispatch({ type: 'next' })}
              >
                <RefreshCw size={18} />
              </button>
              <button
                type='button'
                className='meta'
                aria-pressed={focus}
                onClick={() => {
                  dispatch({ type: 'focus', value: !focus })
                  editor.current?.focus()
                }}
              >
                {focus ? t('退出专注', 'Exit focus') : t('专注模式', 'Focus mode')}
              </button>
            </div>
          </div>
          <div className='latin-reading'>
            <PracticeText session={session} />
            <textarea
              ref={editor}
              aria-label={t('英文练习输入', 'English practice input')}
              className='typing-input'
              spellCheck={false}
              autoCapitalize='off'
              autoComplete='off'
              autoCorrect='off'
              value={session.typed}
              readOnly={complete}
              onFocus={(event) => moveCaret(event.currentTarget)}
              onClick={(event) => moveCaret(event.currentTarget)}
              onKeyUp={(event) => {
                if (!event.nativeEvent.isComposing && caretKeys.has(event.key)) moveCaret(event.currentTarget)
              }}
              onPaste={(event) => event.preventDefault()}
              onDrop={(event) => event.preventDefault()}
              onChange={(event) => {
                const input = event.nativeEvent
                if (
                  input instanceof InputEvent &&
                  (input.inputType.startsWith('insertFromPaste') || input.inputType === 'insertFromDrop')
                )
                  return
                const value = Array.from(event.target.value)
                  .filter((key) => LATIN_ALLOWED_INPUT_KEYS_SET.has(key))
                  .join('')
                  .slice(0, text.length)
                const accepted = dispatch({ type: 'replace', value, at: Date.now() })
                if (accepted && sound)
                  playTypingSound(value.length < session.typed.length || value.slice(-1) === text[value.length - 1])
              }}
            />
          </div>
          <progress
            className='sentence-progress'
            aria-label={t('练习进度', 'Practice progress')}
            max={text.length}
            value={session.typed.length}
          />
          <div className='english-feedback between'>
            <span className='meta live live-indicator'>
              {complete ? t('已完成', 'Complete') : t('正在输入', 'Typing')}
            </span>
            <CharacterLegend />
            <span className='meta'>
              {session.typed.length} / {text.length} CHARACTERS
            </span>
          </div>
        </div>
        <TypingStats score={score} />
        <div className='keyboard-guidance between'>
          <span>
            {t('直接键入高亮字符 · Backspace 返回修改', 'Type the highlighted character · Backspace to correct')}
          </span>
          {complete && dismissed && (
            <button type='button' className='accent' onClick={() => dispatch({ type: 'dismissed', value: false })}>
              {t('查看结果', 'View results')}
            </button>
          )}
          <button type='button' className='text-button accent' onClick={() => dispatch({ type: 'replay' })}>
            <RotateCcw size={16} />
            {t('重新开始', 'Restart')}
          </button>
        </div>
      </div>
      {complete && !dismissed && (
        <SessionResult
          score={score}
          lesson={t('英文打字', 'English typing')}
          onClose={() => dispatch({ type: 'dismissed', value: true })}
          onReplay={() => dispatch({ type: 'replay' })}
          onNext={() => dispatch({ type: 'next' })}
        />
      )}
    </section>
  )
}
