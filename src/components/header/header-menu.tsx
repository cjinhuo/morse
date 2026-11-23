import { ArrowLeftRight, Keyboard, Radio } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useCopy } from '../../shared/preferences'

export default function HeaderMenu({ mobile = false }: { mobile?: boolean }) {
  const t = useCopy()
  const links = [
    { path: '/', label: mobile ? t('摩尔斯', 'Morse') : t('摩尔斯训练', 'Morse training'), Icon: Radio },
    { path: '/latin/', label: t('英文打字', 'English typing'), Icon: Keyboard },
    { path: '/converter/', label: t('编码转换', 'Converter'), Icon: ArrowLeftRight },
  ]
  return (
    <nav className={mobile ? 'mobile-nav' : 'desktop-nav'} aria-label={t('练习模式', 'Practice modes')}>
      {links.map(({ path, label, Icon }) => (
        <NavLink key={path} to={path} end={path === '/'}>
          <Icon size={mobile ? 20 : 17} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
