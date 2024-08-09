import { useEffect, useState } from "react";
import { getThemeMode } from "../shared/utils";
import { LOCAL_STORAGE_THEME_KEY, ThemeMode } from "../shared/constants";

export default function useDarkMode() {
  const [theme, setTheme] = useState<ThemeMode>(getThemeMode())
  useEffect(() => {
    if (theme === ThemeMode.dark) {
      document.documentElement.classList.add(ThemeMode.dark)
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, ThemeMode.dark)
    } else {
      localStorage.removeItem(LOCAL_STORAGE_THEME_KEY)
      document.documentElement.classList.remove(ThemeMode.dark)
    }
  }, [theme])
  return [theme, setTheme] as const
}
