import { useEffectEvent, useLayoutEffect, useRef, useState } from 'react'
import { CHAR_CRITICAL_POINT_TIME, DOT_CRITICAL_POINT_TIME, MAX_KEY_DOWN_TIME_MS } from '../shared/constants'
import type { SavedSession } from '../shared/practice'
import { startTone } from '../shared/sound'

export function useMorseKey({
  disabled,
  exampleSignal,
  externalSession,
  sound,
  onStart,
  onCommit,
}: {
  disabled: boolean
  exampleSignal: string | null
  externalSession: SavedSession | null
  sound: boolean
  onStart: () => void
  onCommit: (code: string) => void
}) {
  const stageRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [pressed, setPressed] = useState(false)
  const [signal, setSignal] = useState(exampleSignal ?? '')
  const buffer = useRef(exampleSignal ?? '')
  const cancelInput = useRef<() => void>(undefined)
  const begin = useEffectEvent(() => {
    onStart()
    return sound ? startTone() : undefined
  })
  const commit = useEffectEvent(onCommit)

  useLayoutEffect(() => {
    if (exampleSignal === null) return
    buffer.current = exampleSignal
    setSignal(exampleSignal)
  }, [exampleSignal])

  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!stage || disabled) return
    let started: number | null = null
    let source: 'keyboard' | number | null = null
    let stopTone: (() => void) | undefined
    let toneTimer: number | undefined
    let commitTimer: number | undefined
    function silence() {
      clearTimeout(toneTimer)
      stopTone?.()
      stopTone = undefined
    }
    function down(id: 'keyboard' | number) {
      if (source !== null) return
      clearTimeout(commitTimer)
      source = id
      started = performance.now()
      stopTone = begin()
      toneTimer = window.setTimeout(silence, MAX_KEY_DOWN_TIME_MS)
      setPressed(true)
    }
    function up(id: 'keyboard' | number) {
      if (source !== id || started === null) return
      const mark = performance.now() - started < DOT_CRITICAL_POINT_TIME ? '.' : '-'
      silence()
      source = null
      started = null
      setPressed(false)
      buffer.current += mark
      setSignal(buffer.current)
      commitTimer = window.setTimeout(() => {
        commitTimer = undefined
        const code = buffer.current
        buffer.current = ''
        setSignal('')
        commit(code)
      }, CHAR_CRITICAL_POINT_TIME)
    }
    function cancel() {
      clearTimeout(commitTimer)
      commitTimer = undefined
      silence()
      source = null
      started = null
      buffer.current = ''
      setPressed(false)
      setSignal('')
    }
    function fromButton(event: Event) {
      return event.target instanceof Node && buttonRef.current?.contains(event.target)
    }
    function keyDown(e: KeyboardEvent) {
      if (e.code !== 'Space' || e.ctrlKey || e.altKey || e.metaKey) return
      if (
        e.target instanceof Element &&
        e.target.closest('input,textarea,select,button,a,summary,dialog,[contenteditable=true]') &&
        !fromButton(e)
      )
        return
      e.preventDefault()
      if (!e.repeat) down('keyboard')
    }
    function keyUp(e: KeyboardEvent) {
      if (e.code === 'Space' && source === 'keyboard') {
        e.preventDefault()
        up('keyboard')
      }
    }
    function pointerDown(e: PointerEvent) {
      const button = buttonRef.current
      if (!button || !fromButton(e) || !e.isPrimary || e.button !== 0) return
      e.preventDefault()
      button.focus({ preventScroll: true })
      stage?.setPointerCapture(e.pointerId)
      down(e.pointerId)
    }
    function pointerUp(e: PointerEvent) {
      up(e.pointerId)
    }
    function pointerCancel(e: PointerEvent) {
      if (e.pointerId === source) cancel()
    }
    function visibility() {
      if (document.hidden) cancel()
    }
    const controller = new AbortController()
    const options = { signal: controller.signal }
    cancelInput.current = cancel
    // Both layouts use this stage. Replacing its button leaves an in-flight letter and deadline intact.
    stage.addEventListener(
      'click',
      (event) => {
        if (event.detail === 0 && fromButton(event)) {
          down('keyboard')
          up('keyboard')
        }
      },
      options
    )
    stage.addEventListener('pointerdown', pointerDown, options)
    document.addEventListener('pointerup', pointerUp, options)
    document.addEventListener('pointercancel', pointerCancel, options)
    stage.addEventListener(
      'lostpointercapture',
      (event) => {
        if (event.target === stage) pointerCancel(event)
      },
      options
    )
    document.addEventListener('keydown', keyDown, options)
    document.addEventListener('keyup', keyUp, options)
    document.addEventListener('visibilitychange', visibility, options)
    window.addEventListener('blur', cancel, options)
    window.addEventListener('pagehide', cancel, options)
    return () => {
      controller.abort()
      cancelInput.current = undefined
      clearTimeout(commitTimer)
      silence()
      if (source !== null || commitTimer !== undefined) cancel()
    }
  }, [disabled])
  useLayoutEffect(() => {
    if (externalSession) cancelInput.current?.()
  }, [externalSession])
  return { stageRef, buttonRef, pressed, signal }
}
