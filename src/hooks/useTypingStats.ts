import { useAtom } from 'jotai'
import { useCallback, useEffect, useEffectEvent, useLayoutEffect, useMemo, useState } from 'react'
import { createPracticeAtom, newPractice, type PracticeAction } from '../atom/practice-progress'
import { type PracticeMode, scoreSession, sessionComplete } from '../shared/practice'

export function useTypingStats(mode: PracticeMode, text: string, sample: string) {
  const practiceAtom = useMemo(() => createPracticeAtom(mode), [mode])
  const initial = useMemo(() => newPractice(text, sample), [text, sample])
  const [{ progress, runningSince, externalSession }, update] = useAtom(practiceAtom)
  const dispatch = useCallback(
    (action: PracticeAction) => update({ initial, displayed: progress, action }),
    [initial, progress, update]
  )
  const pause = useEffectEvent(() => dispatch({ type: 'pause', at: Date.now() }))
  useLayoutEffect(() => {
    const onVisibility = () => {
      if (document.hidden) pause()
    }
    window.addEventListener('pagehide', pause)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.removeEventListener('pagehide', pause)
      document.removeEventListener('visibilitychange', onVisibility)
      pause()
    }
  }, [])

  const [now, setNow] = useState(Date.now)
  const running = runningSince !== null
  useEffect(() => {
    if (!running) return
    const timer = window.setInterval(() => setNow(Date.now()), 250)
    return () => window.clearInterval(timer)
  }, [running])

  const current = progress ?? initial
  const session = { ...current.session, runningSince }
  return {
    session,
    round: current.round,
    focus: current.focus,
    dismissed: current.dismissed,
    externalSession,
    dispatch,
    complete: sessionComplete(session),
    score: scoreSession(session, mode, now),
    example: session.sampleLength > 0 && session.elapsedMs === null,
  }
}
