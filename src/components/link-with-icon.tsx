import React from 'react'
import IconPark from './icon-park'
import { useNavigate } from 'react-router-dom'
import type { IconParkNames } from '../shared/constants'
import { motion } from 'framer-motion'
type PropsType = {
  name: IconParkNames
  value?: string
  type?: 'route' | 'link'
  onClick?: () => void
  style?: React.CSSProperties
}
export default function LinkWithIcon({ name, value, type, onClick,...rest }: PropsType) {
  const navigate = useNavigate()
  const handleOnClick = () => {
    onClick && onClick()
    if (type === 'link') {
      return window.open(value)
    }
    if (type === 'route' && value) {
      return navigate(value)
    }
  }
  return (
    <motion.div whileHover={{ scale: 1.2 }} className='flex items-center cursor-pointer' onClick={handleOnClick}>
      <IconPark {...rest} name={name}></IconPark>
    </motion.div>
  )
}
