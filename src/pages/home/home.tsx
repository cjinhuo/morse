import InputMask from '../../components/input-mask'
import MorseTyper from '../../components/morse-typer'

export default function Home() {
  return (
    <div className='w-full grow px-40 py-10'>
      <MorseTyper />
      <InputMask />
    </div>
  )
}
