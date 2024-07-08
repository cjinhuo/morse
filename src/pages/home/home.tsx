import InputMask from '../../components/input-mask'
import MorseTyper from '../../components/morse-typer'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <MorseTyper />
      <InputMask />
    </div>
  )
}
