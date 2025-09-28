import { useEffect, useState } from "react";
import { getThemeMode } from "../shared/utils";
import { LOCAL_STORAGE_THEME_KEY, ThemeMode } from "../shared/constants";

export default function useDarkMode() {
  const [theme, setTheme] = useState<ThemeMode>(getThemeMode())
  
  useEffect(() => {
    const body = document.body;
    
    if (theme === ThemeMode.dark) {
      // 设置暗黑主题
      body.setAttribute('theme-mode', 'dark');
      document.documentElement.classList.add(ThemeMode.dark);
    } else {
      body.removeAttribute('theme-mode');
      document.documentElement.classList.remove(ThemeMode.dark);
    }
  }, [theme])

  const toggleTheme = (_theme: ThemeMode) => {
    if (_theme === ThemeMode.light) {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, ThemeMode.light)
      setTheme(ThemeMode.light)
    } else {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, ThemeMode.dark)
      setTheme(ThemeMode.dark)
    }
  }
  
  return [theme, toggleTheme] as const
}
