import React from 'react'
import LinkWithIcon from '../link-with-icon'
import { IconParkNames } from '../../shared/constants'
import IconPark from '../icon-park'

export default function Logo() {
  return (
    <div className='h-full flex'>
      <IconPark class='text-skin-neutral-1' name={IconParkNames['morse-code']} size='3rem'></IconPark>
      <div className='text-skin-neutral-2 font-bold text-3xl'>morsetype</div>
    </div>
  )
}
