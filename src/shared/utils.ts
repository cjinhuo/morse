import { buffer, debounceTime, filter, fromEvent, map, race, switchMap, timer } from 'rxjs'
import type { BinaryTreeNode } from '../types'
import {
  ALL_MORSE_CODE_MAP,
  ALL_MORSE_CODE_REVERSE_MAP,
  CHAR_CRITICAL_POINT_TIME,
  DOT_CRITICAL_POINT_TIME,
  LOCAL_STORAGE_THEME_KEY,
  MAX_KEY_DOWN_TIME_MS,
  MorseCodeCharType,
  NEW_LINE_SYMBOL,
  NEW_WORD_SYMBOL,
  SEPARATE_SYMBOL,
  ThemeMode,
  UNKNOWN_SYMBOL_SUFFIX,
} from './constants'

function createBinaryTree(label: string, value: string) {
  const tree: BinaryTreeNode = Object.create(null)
  tree.label = label
  tree.value = value
  return tree
}

export function builtMorseBinaryTree(morseCodeObject: { [key: string]: string }) {
  const root = createBinaryTree('root', '')
  const map = new Map<string, BinaryTreeNode>()
  Object.entries(morseCodeObject)
    .sort((a, b) => a[1].length - b[1].length)
    .forEach(([label, value]) => {
      const node = createBinaryTree(label, value)
      const charLength = value.length
      if (charLength === 1) {
        value === MorseCodeCharType.dotChar ? (root.left = node) : (root.right = node)
      } else {
        const parentValue = value.slice(0, charLength - 1)
        const parent = map.get(parentValue)
        parent && (value[charLength - 1] === MorseCodeCharType.dotChar ? (parent.left = node) : (parent.right = node))
      }
      map.set(value, node)
    })
  return root
}

export function setClassNameWithArray(...args: string[]): string {
  return args.filter(Boolean).join(' ')
}

// need to create after a click event trigger by user
const audioContext = new window.AudioContext()
export function getOscillatorNodeWithParams(waveform: OscillatorType = 'sine', duration = 1) {
  const oscillator = audioContext.createOscillator()
  oscillator.type = waveform
  oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
  const gainNode = audioContext.createGain()
  // 音量大小
  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  return oscillator
}

export function subscribeKeyEventForMorseCode(getOscillatorNode: () => OscillatorNode) {
  const $keyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    filter((e) => e.code === 'Space' && !e.repeat)
  )
  const $keyUpEvent = fromEvent<KeyboardEvent>(document, 'keyup').pipe(filter((e) => e.code === 'Space'))
  const $singleChar = $keyDownEvent.pipe(
    switchMap(() => {
      const startTime = Date.now()
      const oscillator = getOscillatorNode()
      oscillator.start()
      return race(
        $keyUpEvent.pipe(
          map(() => {
            return Date.now() - startTime < DOT_CRITICAL_POINT_TIME
              ? MorseCodeCharType.dotChar
              : MorseCodeCharType.dashChar
          })
        ),
        timer(MAX_KEY_DOWN_TIME_MS).pipe(map(() => MorseCodeCharType.dashChar))
      ).pipe(
        map((morseCode) => {
          oscillator.stop()
          return morseCode
        })
      )
    })
  )
  const $fragment = $singleChar.pipe(
    buffer($singleChar.pipe(debounceTime(CHAR_CRITICAL_POINT_TIME))),
    filter((v) => v.length > 0),
    map((v) => v.join(''))
  )
  return [$singleChar, $fragment] as const
}

export function transformMorseCodeToChar(morseCode: string) {
  const char = ALL_MORSE_CODE_REVERSE_MAP[morseCode]
  return char || null
}

/**
 * transform single char to morse code
 * @param char single char
 * @returns
 */
export function transformCharToMorseCode(char: string) {
  const morseCode = ALL_MORSE_CODE_MAP[char]
  return morseCode || null
}

/**
 * transform string to morse code which could includes space
 * @param str string
 */
export function transformStringToMorseCode(str: string) {
  // 先转换为大写
  str = str.toUpperCase()
  return Array.from(str).reduce((result, char) => {
    if (char === ' ') {
      result += NEW_WORD_SYMBOL
      return result
    }
    if (char === '\n') {
      result += NEW_LINE_SYMBOL
      return result
    }
    const morseCode = transformCharToMorseCode(char)
    result += morseCode ? morseCode + SEPARATE_SYMBOL : `${char}${UNKNOWN_SYMBOL_SUFFIX}`
    return result
  }, '')
}

export function isMobile() {
  if (
    window.navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true // 移动端
  } else {
    return false // PC端
  }
}

export function isSystemDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function isLocalStorageDarkMode() {
  return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === 'dark'
}

export function getThemeMode() {
  const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
  if (localStorageTheme) {
    return localStorageTheme as ThemeMode
  }
  return isSystemDarkMode() ? ThemeMode.dark : ThemeMode.light
}
