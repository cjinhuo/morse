import InputMask from '../../components/input-mask'
import MorseTyper from '../../components/morse-typer'
import MotionSpaceButton from '../../components/motion-space-button'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <MorseTyper />
      <InputMask />
      <MotionSpaceButton></MotionSpaceButton>
    </div>
  )
}
