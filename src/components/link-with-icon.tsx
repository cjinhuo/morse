import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import type { IconParkNames } from '../shared/constants'
import IconPark from './icon-park'
type PropsType = {
  name: IconParkNames
  value?: string
  type?: 'route' | 'link'
  onClick?: () => void
  style?: React.CSSProperties
  active?: boolean
}
export default function LinkWithIcon({ name, value, type, onClick, active = false, ...rest }: PropsType) {
  const navigate = useNavigate()
  const handleOnClick = () => {
    if (active) return
    onClick?.()
    if (type === 'link') {
      return window.open(value)
    }
    if (type === 'route' && value) {
      return navigate(value)
    }
  }
  return (
    <motion.div 
      whileHover={active ? {} : { scale: 1.2 }} 
      className={`flex items-center ${active ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} 
      onClick={handleOnClick}
    >
      <IconPark {...rest} name={name} />
    </motion.div>
  )
}
