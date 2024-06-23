import { IconParkNames } from '../../shared/constants'
import IconPark from '../icon-park'

export default function Logo() {
  return (
    <div className='h-full flex'>
      <IconPark
        class='text-skin-neutral-2 relative'
        style={{ bottom: '2px' }}
        name={IconParkNames['morse-code']}
        size='2.5rem'></IconPark>
      <div className='text-skin-neutral-3 font-medium text-3xl'>MorseType</div>
    </div>
  )
}
