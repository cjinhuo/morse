import { atomWithStorage } from "jotai/utils";


export interface SvgConfig {
  strokeWidth: number
  dashWidth: number
  lineHeight: number
  letterSpace: number
  dotDashSpace: number
  containerPadding: number
}

export const defaultSvgConfig: SvgConfig = {
  strokeWidth: 3,
  dashWidth: 12,
  lineHeight: 24,
  letterSpace: 16,
  dotDashSpace: 6,
  containerPadding: 20,
}

export const svgConfigAtom = atomWithStorage<SvgConfig>('morse-svg-config', defaultSvgConfig)
