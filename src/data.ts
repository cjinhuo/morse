import { MorseCodeCharType } from "./constants"
import type { BinaryTreeNode } from "./types"



function createBinaryTree(label: string, value: string) {
  const tree: BinaryTreeNode = Object.create(null)
  tree.label = label
  tree.value = value
  return tree
}




export const WORD_MORSE_CODE = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
}

export function builtMorseBinaryTree(morseCodeObject:{[key: string]: string}) {
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

export const NUMBER_MORSE_CODE = {
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
}
export const SPECIAL_CHAR_MORSE_CODE = {
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  "'": '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  _: '..--.-',
  '"': '.-..-.',
  $: '...-..-',
  '@': '.--.-.',
}


// 句点（.）：······
// 规律：连续六个短点。简洁并与E的短点重复强调。
// 逗号（,）：−−··−−
// 规律：两长划接两个短点，再接两个长划，形成对称的节奏。
// 冒号（:）：−−−···
// 规律：三个长划接三个短点，类似于连字符但数量更多。
// 问号（?）：··−−··
// 规律：两个短点、两个长划和两个短点，形成对称的开放式组合，暗示“提问”。
// 单引号（'）：·−−−−·
// 规律：一个短点包裹住四个长划，像单引号包住文本。
// 连字符（-）：−····−
// 规律：一个长划包住四个短点，中间的短点给人以联系的感觉。
// 斜杠（/）：−··−·
// 规律：一长一短的组合中间有两个短点，与字母N和D的部分组合互补。
// 括号（()）：−·−−·−
// 规律：长短划交替形成对称的包围感，像括号包住内容。
// 等号（=）：−···−
// 规律：一个长划包住三个短点，表示等式的对称性。



// const initialNodes: Node<NodeData>[] = [
//   {
//     id: '1',
//     type: 'tree',
//     data: { title: '', value: '' },
//     draggable: false,
//     connectable: false,
//     position: { x: 250, y: 25 },
//   },
//   {
//     id: '2',
//     type: 'tree',
//     draggable: false,
//     connectable: false,
//     data: { title: 'E', value: '.' },
//     position: { x: 150, y: 125 },
//   },
//   {
//     id: '3',
//     type: 'tree',
//     draggable: false,
//     connectable: false,
//     data: { title: 'T', value: '.-' },
//     position: { x: 400, y: 125 },
//   },
//   {
//     id: '4',
//     type: 'tree',
//     draggable: false,
//     connectable: false,
//     data: { title: 'I', value: '..' },
//     position: { x: 250, y: 250 },
//   },
// ]

// const initialEdges: Edge<EdgeData>[] = [
//   {
//     id: 'e1-2',
//     source: '1',
//     target: '2',
//     type: 'tree',
//     data: {
//       type: MorseCodeType.dot,
//     },
//   },
//   {
//     id: 'e1-3',
//     source: '1',
//     target: '3',
//     type: 'tree',
//     data: {
//       type: MorseCodeType.dash,
//     },
//   },
// ]