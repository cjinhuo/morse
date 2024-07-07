import typeWriterAudio from '../assets/typewriter.mp3'

const sound = new Audio(typeWriterAudio)
export const playTypeWriterSound = () => {
  sound.currentTime = 0
  sound.play()
}
