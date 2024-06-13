export enum MorseCodeType {
  dot = 'dot',
  dash = 'dash',
}
export enum MorseCodeCharType {
  dotChar = '.',
  dashChar = '-',
}
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
