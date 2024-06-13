import type { MorseCodeType } from "./constants"

export interface BinaryTreeNode {
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null
  value: string
  label: string
}

export interface FlowTreeNode extends BinaryTreeNode {
  parentId?: string
  morseCodeType?: MorseCodeType
}
