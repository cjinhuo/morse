import { useEffect } from 'react'
import { filter, fromEvent, race, switchMap, takeUntil, tap, timer } from 'rxjs'
import { DOT_CRITICAL_POINT_TIME } from '../constants'
import CharWithMorseCode from './char-with-morse-code'

const audioContext = new window.AudioContext()
function playTone(waveform: OscillatorType = 'sine', duration = 1) {
  const oscillator = audioContext.createOscillator()
  oscillator.type = waveform
  oscillator.frequency.setValueAtTime(600, audioContext.currentTime) // A4 note
  const gainNode = audioContext.createGain()
  // 音量大小
  gainNode.gain.setValueAtTime(0.6, audioContext.currentTime)

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  return oscillator
}

export default function MorseTyper() {
  const keyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    filter((e) => e.code === 'Space' && !e.repeat)
  )
  const keyUpEvent = fromEvent<KeyboardEvent>(document, 'keyup').pipe(filter((e) => e.code === 'Space'))

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const subscription = keyDownEvent
      .pipe(
        switchMap(() => {
          const startTime = Date.now()
          const oscillator = playTone()
          oscillator.start()
          return race(
            keyUpEvent.pipe(
              tap(() => {
                const endTime = Date.now()
                if (endTime - startTime < DOT_CRITICAL_POINT_TIME) {
                  console.log('dot')
                } else {
                  console.log('dash')
                }
                oscillator.stop()
              })
            ),
            timer(500).pipe(tap(() => oscillator.stop()))
          ).pipe(takeUntil(keyDownEvent))
        })
      )
      .subscribe()
    return () => subscription.unsubscribe()
  }, [])
  return (
    <div>
      <CharWithMorseCode char='A'></CharWithMorseCode>
    </div>
  )
}
