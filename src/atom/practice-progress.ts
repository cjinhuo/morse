import { atom } from 'jotai'
import {
  beginSession,
  type Edit,
  editSession,
  type PracticeMode,
  type SavedSession,
  sessionComplete,
  snapshotSession,
} from '../shared/practice'
import { LATIN_EXAMPLE, LATIN_SENTENCES, MORSE_EXAMPLE, MORSE_SENTENCES } from '../shared/sentences'
import { isRecord, localRecord } from './local-record'

interface PracticeProgress {
  session: SavedSession
  round: number
  focus: boolean
  dismissed: boolean
  writer: string
}

const exercises = {
  latin: [LATIN_EXAMPLE, ...LATIN_SENTENCES.filter((text) => text !== LATIN_EXAMPLE)],
  morse: [MORSE_EXAMPLE, 'SOS', 'QRT', ...MORSE_SENTENCES.filter((text) => text !== 'SOS' && text !== 'QRT')],
}

function natural(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0
}

function validSession(value: unknown): value is SavedSession {
  if (!isRecord(value)) return false
  const { text, typed, sampleLength, elapsedMs } = value
  if (typeof text !== 'string' || !text.length || typeof typed !== 'string' || typed.length > text.length) return false
  if (!natural(sampleLength) || sampleLength > typed.length) return false
  return elapsedMs === null ? sampleLength === typed.length && typed.length < text.length : natural(elapsedMs)
}

function validProgress(value: unknown): value is PracticeProgress | null {
  if (value === null) return true
  return (
    isRecord(value) &&
    validSession(value.session) &&
    natural(value.round) &&
    typeof value.focus === 'boolean' &&
    typeof value.dismissed === 'boolean' &&
    (!value.dismissed || sessionComplete(value.session)) &&
    typeof value.writer === 'string'
  )
}

const records = {
  latin: localRecord<PracticeProgress | null>('morse:progress:v1:latin', null, validProgress),
  morse: localRecord<PracticeProgress | null>('morse:progress:v1:morse', null, validProgress),
}

export function newPractice(text: string, sample = '', round = 0): PracticeProgress {
  return { session: snapshotSession(beginSession(text, sample), 0), round, focus: false, dismissed: false, writer: '' }
}

export type PracticeAction = Edit | { type: 'next' | 'replay' } | { type: 'focus' | 'dismissed'; value: boolean }

interface PracticeUpdate {
  initial: PracticeProgress
  displayed: PracticeProgress | null
  action: PracticeAction
}

export function createPracticeAtom(mode: PracticeMode) {
  const storage = records[mode]
  const progressAtom = storage.createAtom()
  const clockAtom = atom<{ owner: PracticeProgress; since: number } | null>(null)
  const writer = crypto.getRandomValues(new Uint32Array(4)).join('-')
  return atom(
    (get) => {
      const progress = get(progressAtom)
      const clock = get(clockAtom)
      return {
        progress,
        runningSince: clock && clock.owner === progress ? clock.since : null,
        externalSession: progress && progress.writer !== writer ? progress.session : null,
      }
    },
    (get, set, { initial, displayed, action }: PracticeUpdate) => {
      const latest = storage.read()
      // localRecord retains each snapshot's identity until its stored value changes.
      if (
        mode === 'latin' &&
        latest !== displayed &&
        (action.type === 'replace' || action.type === 'input' || action.type === 'backspace')
      ) {
        storage.refresh()
        return
      }
      const before = latest ?? initial
      const clock = get(clockAtom)
      const runningSince = clock?.owner === before ? clock.since : null
      const session = { ...before.session, runningSince }
      const at = 'at' in action ? action.at : Date.now()
      let next = before
      let live = session

      switch (action.type) {
        case 'next':
        case 'replay': {
          const list = exercises[mode]
          const text = action.type === 'next' ? list[(list.indexOf(session.text) + 1) % list.length] : session.text
          next = newPractice(text, '', before.round + 1)
          live = { ...next.session, runningSince: null }
          break
        }
        case 'focus':
        case 'dismissed':
          if (before[action.type] === action.value) return
          if (action.type === 'dismissed' && !sessionComplete(session)) return
          next = { ...before, [action.type]: action.value }
          break
        default:
          // A buffered Morse letter belongs to the tab that started transmitting it.
          if (action.type === 'input' && mode === 'morse' && runningSince === null) return
          live = editSession(session, action)
          if (live === session) return
      }
      const saved = { ...next, session: snapshotSession(live, at), writer }
      set(progressAtom, saved)
      set(clockAtom, live.runningSince === null ? null : { owner: saved, since: at })
      return true
    }
  )
}
