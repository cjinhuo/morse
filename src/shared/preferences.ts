import { useAtomValue } from 'jotai'
import { localRecord } from '../atom/local-record'
import { LOCAL_STORAGE_THEME_KEY, ThemeMode } from './constants'

export const soundAtom = localRecord(
  'morse-sound',
  true,
  (value): value is boolean => typeof value === 'boolean'
).createAtom()
export const languageAtom = localRecord(
  'morse-language',
  'zh',
  (value): value is 'zh' | 'en' => value === 'zh' || value === 'en'
).createAtom()

// Previous versions wrote the theme as a plain string.
export function readTheme(): ThemeMode {
  try {
    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === ThemeMode.light ? ThemeMode.light : ThemeMode.dark
  } catch {
    return ThemeMode.dark
  }
}
const chinese = (zh: string, _en: string) => zh
const english = (_zh: string, en: string) => en
export function useCopy() {
  return useAtomValue(languageAtom) === 'en' ? english : chinese
}
