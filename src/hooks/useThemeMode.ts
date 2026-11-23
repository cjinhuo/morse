import { useLayoutEffect, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, type ThemeMode } from '../shared/constants'
import { readTheme } from '../shared/preferences'

export default function useThemeMode() {
  const [theme, setTheme] = useState(readTheme)
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  function changeTheme(next: ThemeMode) {
    setTheme(next)
    try {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, next)
    } catch {
      /* The theme still applies in this tab when storage is unavailable. */
    }
  }
  return [theme, changeTheme] as const
}
