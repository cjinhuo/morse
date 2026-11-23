import { atom } from 'jotai'
import { isRecord, localRecord } from './local-record'

export const defaultSvgConfig = {
  strokeWidth: 3,
  dashWidth: 12,
  lineHeight: 24,
  letterSpace: 16,
  dotDashSpace: 6,
  containerPadding: 20,
}

export type SvgConfig = typeof defaultSvgConfig
export const styleFields = [
  ['strokeWidth', '线条粗细', 'Stroke width', 1, 10, 0.5],
  ['dashWidth', '长划宽度', 'Dash width', 2, 32, 1],
  ['lineHeight', '行间距', 'Line spacing', 12, 52, 1],
  ['letterSpace', '字符间距', 'Letter spacing', 5, 30, 1],
  ['dotDashSpace', '点划间距', 'Signal spacing', 1, 15, 1],
  ['containerPadding', '画布留白', 'Canvas padding', 10, 52, 1],
] as const satisfies ReadonlyArray<readonly [keyof SvgConfig, string, string, number, number, number]>

const storedConfig = localRecord<Record<string, unknown>>('morse-svg-config', defaultSvgConfig, isRecord).createAtom()

export const svgConfigAtom = atom(
  (get) => {
    const saved = get(storedConfig)
    const config = { ...defaultSvgConfig }
    for (const [key, , , min, max] of styleFields) {
      const value = saved[key]
      if (typeof value === 'number' && Number.isFinite(value)) config[key] = Math.min(max, Math.max(min, value))
    }
    return config
  },
  (_get, set, config: SvgConfig) => set(storedConfig, config)
)
