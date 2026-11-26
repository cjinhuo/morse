import { useAtom } from 'jotai'
import { BatteryFull, Github, Signal, Volume2, VolumeX, Wifi } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useMobile from '../../hooks/useMobile'
import { languageAtom, soundAtom, useCopy } from '../../shared/preferences'
import HeaderMenu from './header-menu'
import Logo from './logo'
import Theme from './theme'

export function SoundToggle() {
  const [sound, setSound] = useAtom(soundAtom)
  const t = useCopy()
  const label = sound ? t('关闭声音', 'Mute sound') : t('开启声音', 'Enable sound')
  return (
    <button
      type='button'
      aria-label={label}
      title={label}
      aria-pressed={sound}
      className='icon-button'
      onClick={() => setSound(!sound)}
    >
      {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  )
}

function Utilities() {
  const [language, setLanguage] = useAtom(languageAtom)
  return (
    <div className='utilities'>
      <a
        href='https://github.com/cjinhuo/morse'
        target='_blank'
        rel='noreferrer'
        aria-label='GitHub'
        className='icon-button'
      >
        <Github size={18} />
      </a>
      <Theme />
      <button
        type='button'
        className='meta'
        aria-label={language === 'zh' ? 'Switch to English' : '切换到中文'}
        onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      >
        EN / 中
      </button>
    </div>
  )
}

export default function Header() {
  const mobile = useMobile()
  const menu = useRef<HTMLDetailsElement>(null)
  const t = useCopy()
  useEffect(() => {
    if (!mobile) return
    function closeOnOutsidePress(event: PointerEvent) {
      const details = menu.current
      if (details?.open && !event.composedPath().includes(details)) details.open = false
    }
    document.addEventListener('pointerdown', closeOnOutsidePress, true)
    return () => document.removeEventListener('pointerdown', closeOnOutsidePress, true)
  }, [mobile])
  if (mobile)
    return (
      <header>
        <div className='phone-status' aria-hidden='true'>
          <span>9:41</span>
          <span className='flex gap-[6px]'>
            <Signal size={14} />
            <Wifi size={14} />
            <BatteryFull size={16} />
          </span>
        </div>
        <div className='phone-header'>
          <details
            ref={menu}
            onBlur={(event) => {
              // WebKit can blur the summary without focusing the button being pressed.
              if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
                event.currentTarget.open = false
              }
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape' && menu.current) {
                menu.current.open = false
                menu.current.querySelector('summary')?.focus()
              }
            }}
          >
            <summary aria-label={t('MorseType 菜单', 'MorseType menu')}>
              <Logo />
            </summary>
            <Utilities />
          </details>
          <SoundToggle />
        </div>
      </header>
    )
  return (
    <header className='site-header'>
      <Link to='/'>
        <Logo />
      </Link>
      <HeaderMenu />
      <Utilities />
    </header>
  )
}
