import Logo from './logo'
import RefreshSentence from './refresh-sentence'

export default function HeaderLeft() {
  return (
    <div className='h-full flex justify-start'>
      <Logo />
      <RefreshSentence />
    </div>
  )
}
