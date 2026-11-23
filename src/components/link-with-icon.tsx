import { motion } from 'motion/react'
import type { IconParkNames } from '../shared/constants'
import IconPark from './icon-park'

type PropsType = {
  name: IconParkNames
  label?: string
  value?: string
  type?: 'route' | 'link'
  onClick?: () => void
  style?: React.CSSProperties
  active?: boolean
}
export default function LinkWithIcon({ name, value, type, label, onClick, active = false, ...rest }: PropsType) {
  if (type === 'route' && value) {
    return (
      <motion.a
        href={`/morse${value}`}
        aria-label={label}
        aria-current={active ? 'page' : undefined}
        whileHover={{ scale: 1.2 }}
      >
        <IconPark {...rest} name={name} active={active} />
      </motion.a>
    )
  }
  const handleOnClick = () => {
    if (active) return
    onClick?.()
    if (type === 'link') {
      return window.open(value)
    }
  }
  return (
    <motion.div
      whileHover={active ? {} : { scale: 1.2 }}
      style={{ scale: active ? 1.2 : 1 }}
      className={`flex items-center ${active ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={handleOnClick}
    >
      <IconPark {...rest} name={name} active={active} />
    </motion.div>
  )
}
