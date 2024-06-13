
import { MorseCodeCharType, type BinaryTreeNode } from "./types"

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

