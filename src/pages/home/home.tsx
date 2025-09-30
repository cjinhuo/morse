import InputMask from './input-mask'
import MorseTyper from './morse-typer'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <MorseTyper />
      <InputMask />
    </div>
  )
}
