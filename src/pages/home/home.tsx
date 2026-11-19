import InputMask from './input-mask'
import MorseTyper from './morse-typer'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <h1 className='text-2xl font-semibold'>Morse Code Typing Practice</h1>
      <p>Tap the space bar for a dot, or hold it for a dash.</p>
      <MorseTyper />
      <InputMask />
    </div>
  )
}
