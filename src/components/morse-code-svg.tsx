import type { Ref } from 'react'
import type { SvgConfig } from '../atom/svg-config-atom'
import type { encodeWords } from '../shared/morse'
import { useCopy } from '../shared/preferences'

export default function MorseCodeSvg({
  words,
  config,
  ref,
}: {
  words: ReturnType<typeof encodeWords>
  config: SvgConfig
  ref?: Ref<SVGSVGElement>
}) {
  const t = useCopy()
  // The Pen preview enlarges signal marks and leaves a caption below each letter.
  const dot = config.strokeWidth * 2
  const dash = Math.max((config.dashWidth * 5) / 3, dot + config.dashWidth)
  const letterGap = config.letterSpace * 1.5
  const markHeight = Math.max(8, dot)
  const rowHeight = markHeight + 12 + 13
  const rowGap = (config.lineHeight * 4) / 3
  const rows = words.map((word) => {
    let nextLetter = 0
    const letters = word.map(({ letter, code }) => {
      let nextMark = 0
      const marks = Array.from(code, (symbol) => {
        const width = symbol === '.' ? dot : dash
        const mark = { x: nextMark, width, dot: symbol === '.' }
        nextMark += width + config.dotDashSpace
        return mark
      })
      const marksWidth = nextMark - config.dotDashSpace
      const width = Math.max(8, marksWidth)
      const glyph = { letter, marks, marksWidth, width, x: nextLetter }
      nextLetter += width + letterGap
      return glyph
    })
    return { letters, width: nextLetter - letterGap }
  })
  const width = rows.reduce((max, row) => Math.max(max, row.width), 0) + config.containerPadding * 2
  const height = rows.length * rowHeight + Math.max(0, rows.length - 1) * rowGap + config.containerPadding * 2
  return (
    <svg
      ref={ref}
      role='img'
      aria-label={t('信号预览', 'Signal preview')}
      width={width}
      height={height}
      viewBox={[0, 0, width, height].join(' ')}
      xmlns='http://www.w3.org/2000/svg'
    >
      {rows.map((row, index) => {
        const y = config.containerPadding + index * (rowHeight + rowGap)
        return (
          <g key={y} transform={`translate(${(width - row.width) / 2} ${y})`}>
            {row.letters.map((glyph) => (
              <g key={glyph.x} transform={`translate(${glyph.x} 0)`}>
                <g
                  fill='var(--signal)'
                  transform={`translate(${(glyph.width - glyph.marksWidth) / 2} ${(markHeight - dot) / 2})`}
                >
                  {glyph.marks.map((mark) =>
                    mark.dot ? (
                      <circle key={mark.x} cx={mark.x + dot / 2} cy={dot / 2} r={dot / 2} />
                    ) : (
                      <rect key={mark.x} x={mark.x} width={mark.width} height={dot} rx={Math.min(2, dot / 2)} />
                    )
                  )}
                </g>
                <text
                  x={glyph.width / 2}
                  y={markHeight + 22}
                  textAnchor='middle'
                  fontFamily='Fragment Mono, monospace'
                  fontSize='11'
                  letterSpacing='1.2'
                  fill='var(--signal-caption)'
                >
                  {glyph.letter}
                </text>
              </g>
            ))}
          </g>
        )
      })}
    </svg>
  )
}
