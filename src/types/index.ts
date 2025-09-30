import type { MorseCodeType } from '../shared/constants'

export type { MorseCodeType }

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
