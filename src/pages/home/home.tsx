import CharTyper from '../../components/char-typer'
import MorseTyper from '../../components/morse-typer'

export default function Home() {
  return (
    <div className='w-full px-8 grow'>
      <CharTyper data={'hello world!'} />
      <MorseTyper />
    </div>
  )
}
