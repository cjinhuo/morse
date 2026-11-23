import { Moon, Sun } from 'lucide-react'
import useThemeMode from '../../hooks/useThemeMode'
import { ThemeMode } from '../../shared/constants'
import { useCopy } from '../../shared/preferences'

export default function Theme() {
  const [theme, setTheme] = useThemeMode()
  const t = useCopy()
  const dark = theme === ThemeMode.dark
  const label = dark ? t('切换到浅色主题', 'Switch to light theme') : t('切换到暗色主题', 'Switch to dark theme')
  return (
    <button
      type='button'
      className='icon-button'
      aria-label={label}
      title={label}
      onClick={() => setTheme(dark ? ThemeMode.light : ThemeMode.dark)}
    >
      {dark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
