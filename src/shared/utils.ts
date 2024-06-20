import { buffer, debounceTime, filter, fromEvent, map, race, switchMap, takeUntil, timer } from 'rxjs'
import { type BinaryTreeNode } from '../types'
import {  ALL_MORSE_CODE_MAP, ALL_MORSE_CODE_REVERSE_MAP, CHAR_CRITICAL_POINT_TIME, DOT_CRITICAL_POINT_TIME, MAX_KEY_DOWN_TIME_MS, MorseCodeCharType } from './constants'

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

const audioContext = new window.AudioContext()
export function getOscillatorNodeWithParams(waveform: OscillatorType = 'sine', duration = 1) {
  const oscillator = audioContext.createOscillator()
  oscillator.type = waveform
  oscillator.frequency.setValueAtTime(600, audioContext.currentTime) // A4 note
  const gainNode = audioContext.createGain()
  // 音量大小
  gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  return oscillator
}


export function subscribeKeyEventForMorseCode(getOscillatorNode: () => OscillatorNode) {
  // todo 这里可以支持改成任意键位和支持鼠标左右键
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
            // console.log('key down duration :', Date.now() - startTime)
            oscillator.stop()
            if (Date.now() - startTime < DOT_CRITICAL_POINT_TIME) {
              return MorseCodeCharType.dotChar
            } else {
              return MorseCodeCharType.dashChar
            }
          })
        ),
        timer(MAX_KEY_DOWN_TIME_MS).pipe(
          map(() => {
            oscillator.stop()
            return MorseCodeCharType.dashChar
          })
        )
      ).pipe(takeUntil($keyDownEvent))
    })
  )
  const $fragment = $singleChar.pipe(
    buffer($singleChar.pipe(debounceTime(CHAR_CRITICAL_POINT_TIME))),
    filter(v => v.length > 0),
    map(v => v.join(''))
  )
  return [$singleChar, $fragment] as const
}


export function transformMorseCodeToChar(morseCode: string) {
  const char = ALL_MORSE_CODE_REVERSE_MAP[morseCode]
  return char || undefined
}

export function transformCharToMorseCode(char: string) {
  const morseCode = ALL_MORSE_CODE_MAP[char]
  return morseCode || undefined
}