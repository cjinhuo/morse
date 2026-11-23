import errorInputAudio from '../assets/error_input.wav'
import typeWriterAudio from '../assets/typewriter.mp3'

let audioContext: AudioContext | undefined
export function startTone() {
  if (!window.AudioContext) return
  const context = (audioContext ??= new AudioContext())
  if (context.state === 'suspended') void context.resume().catch(() => {})
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  oscillator.frequency.value = 600
  gain.gain.value = 0.14
  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start()
  return () => {
    oscillator.stop()
    oscillator.disconnect()
    gain.disconnect()
  }
}

const typing = new Audio(typeWriterAudio)
const error = new Audio(errorInputAudio)
export function playTypingSound(correct: boolean) {
  const audio = correct ? typing : error
  audio.currentTime = 0
  void audio.play().catch(() => {})
}
