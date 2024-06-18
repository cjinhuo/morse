import CharTyper from '../../components/char-typer'
import InputMask from '../../components/input-mask'
import MorseTyper from '../../components/morse-typer'

export default function Home() {
  return (
    <div className='w-full px-8 grow'>
      {/* <CharTyper data={'hello world!'} /> */}
      <MorseTyper />
      <InputMask></InputMask>
    </div>
  )
}
