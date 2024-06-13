export enum MorseCodeType {
  dot = 'dot',
  dash = 'dash',
}
export interface EdgeData {
  type: MorseCodeType
}

export enum MorseCodeCharType {
  dotChar = '.',
  dashChar = '-',
}
export const FLOW_TREE_NAME = 'tree'