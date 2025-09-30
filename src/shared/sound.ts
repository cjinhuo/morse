import errorInputAudio from '../assets/error_input.wav'
import typeWriterAudio from '../assets/typewriter.mp3'

const sound = new Audio(typeWriterAudio)
export const playTypeWriterSound = () => {
  sound.currentTime = 0
  sound.play()
}

const errorSound = new Audio(errorInputAudio)
export const playErrorSound = () => {
  errorSound.currentTime = 0
  errorSound.play()
}
