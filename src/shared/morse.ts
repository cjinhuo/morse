import { ALL_MORSE_CODE_MAP } from './constants'

export function supportedText(text: string) {
  return Array.from(text)
    .filter((char) => /\s/.test(char) || ALL_MORSE_CODE_MAP[char.toUpperCase()])
    .join('')
}

export function encodeWords(text: string) {
  return supportedText(text)
    .toUpperCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => Array.from(word, (letter) => ({ letter, code: ALL_MORSE_CODE_MAP[letter] })))
}

export function formatCode(words: ReturnType<typeof encodeWords>) {
  return words.map((word) => word.map(({ code }) => code).join(' ')).join(' / ')
}

export function displaySignal(code: string, spaced = false) {
  return Array.from(code, (mark) => (mark === '.' ? '·' : '−')).join(spaced ? ' ' : '')
}
