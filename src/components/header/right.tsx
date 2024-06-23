import React from 'react'
import IconPark from '../icon-park'
import { Typography } from '@douyinfe/semi-ui'
export default function HeaderRight() {
  return (
    <div className='h-full flex'>
      {/* 建一个 typing 仓库 */}
      <Typography.Text link={{ href: 'https://github.com/cjinhuo/morse', target: '_blank' }}>
        <IconPark name='github'></IconPark>
      </Typography.Text>
    </div>
  )
}
