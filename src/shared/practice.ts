export type PracticeMode = 'morse' | 'latin'

export interface SavedSession {
  text: string
  typed: string
  sampleLength: number
  // null distinguishes the untouched example from a real session at zero milliseconds.
  elapsedMs: number | null
}

export interface Session extends SavedSession {
  runningSince: number | null
}

export function beginSession(text: string, sample = ''): Session {
  return {
    text,
    typed: sample,
    sampleLength: sample.length,
    elapsedMs: null,
    runningSince: null,
  }
}

export type Edit =
  | { type: 'start' | 'backspace' | 'pause'; at: number }
  | { type: 'input'; value: string; mode: PracticeMode; at: number }
  | { type: 'replace'; value: string; at: number }

export function sessionComplete(session: SavedSession) {
  return session.typed.length === session.text.length
}

function elapsedAt(session: Session, now: number) {
  return (session.elapsedMs ?? 0) + (session.runningSince === null ? 0 : Math.max(0, now - session.runningSince))
}

export function snapshotSession(session: Session, now: number): SavedSession {
  const { text, typed, sampleLength } = session
  return { text, typed, sampleLength, elapsedMs: session.elapsedMs === null ? null : elapsedAt(session, now) }
}

export function editSession(session: Session, edit: Edit): Session {
  if (sessionComplete(session)) return session
  if (edit.type === 'pause') {
    return session.runningSince === null ? session : { ...snapshotSession(session, edit.at), runningSince: null }
  }
  if (edit.type === 'start') {
    return session.runningSince === null
      ? { ...session, elapsedMs: session.elapsedMs ?? 0, runningSince: edit.at }
      : session
  }
  let typed = session.typed
  let sampleLength = session.sampleLength
  if (edit.type === 'input') {
    typed += edit.value
    if (edit.mode === 'morse' && session.text[typed.length] === ' ') typed += ' '
  } else if (edit.type === 'replace') {
    typed = edit.value
    let common = 0
    while (common < sampleLength && typed[common] === session.typed[common]) common++
    sampleLength = common
  } else {
    typed = typed.slice(0, -1)
  }
  typed = typed.slice(0, session.text.length)
  if (typed === session.typed) return session
  return {
    ...session,
    typed,
    sampleLength: Math.min(typed.length, sampleLength),
    elapsedMs: elapsedAt(session, edit.at),
    runningSince: typed.length === session.text.length ? null : edit.at,
  }
}

export function scoreSession(session: Session, mode: PracticeMode, now: number) {
  const example = session.elapsedMs === null && session.sampleLength > 0
  let count = 0
  let correct = 0
  for (let i = example ? 0 : session.sampleLength; i < session.typed.length; i++) {
    if (mode === 'morse' && session.text[i] === ' ') continue
    count++
    if (session.typed[i] === session.text[i]) correct++
  }
  const elapsed = example ? 5000 : elapsedAt(session, now)
  const seconds = Math.floor(elapsed / 1000)
  const pad = (value: number) => String(value).padStart(2, '0')
  return {
    wpm: elapsed ? Math.round((correct * 12000) / elapsed) : 0,
    cpm: elapsed ? Math.round((correct * 60000) / elapsed) : 0,
    accuracy: count ? Math.round((correct * 1000) / count) / 10 : 0,
    errors: count - correct,
    time: `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`,
  }
}

export type Score = ReturnType<typeof scoreSession>
