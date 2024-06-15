import CharTyper from '../../components/char-typer'

export default function Home() {
  return (
    <div className='w-full px-8 grow'>
      <CharTyper data={'hello world!'}></CharTyper>
    </div>
  )
}
