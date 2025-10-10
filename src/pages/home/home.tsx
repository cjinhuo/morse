import { useEffect } from 'react'
import InputMask from './input-mask'
import MorseTyper from './morse-typer'

export default function Home() {
  useEffect(() => {
    document.title = 'Morse Code Typer'
  }, [])
  return (
    <div className='w-full h-full'>
      <MorseTyper />
      <InputMask />
    </div>
  )
}
