import mergeWith from 'lodash/mergeWith'
import styled from 'styled-components'
import { MorseCodeCharType, NEWLINE_SYMBOL, SEPARATE_SYMBOL } from '../shared/constants'

type LineGroupProps = {
  morseCode: string
  // MAY DAY: --|.-|-.--|+-..|.-|-.--|,use | as separator between char. use + as separator between word.
  dotWidth?: number
  dashWidth?: number
  strokeWidth?: number
  stroke?: string
  lineHeight?: number
  letterSpace?: number
  dotDashSpace?: number
  containerWidth?: number
  containerHeight?: number
  containerPadding?: number
  autoCalculateContainerSize?: boolean
}
const DefaultConfig: Omit<Required<LineGroupProps>, 'morseCode'> = {
  dotWidth: 0,
  dashWidth: 8,
  strokeWidth: 4,
  stroke: '',
  lineHeight: 20,
  letterSpace: 10,
  dotDashSpace: 4,
  containerWidth: 10,
  containerHeight: 10,
  containerPadding: 10,
  autoCalculateContainerSize: true,
}

const SvgContainer = styled.svg`
  .line {
    stroke: ${({ stroke }) => stroke || 'var(--color-neutral-4)'};
  }
`
/**
 * render morse code svg container
 * @param props
 * @returns
 */
export default function MorseCodeSvg(props: LineGroupProps) {
  const config = mergeWith(DefaultConfig, props, (objValue, srcValue) => {
    if (srcValue === undefined) return objValue
    return srcValue
  })

  const [width, height, group] = (() => {
    let x1 = config.containerPadding
    let y1 = config.containerPadding
    let x2 = x1
    let y2 = y1
    let width = config.containerPadding * 2
    let height = config.containerPadding * 2
    if (config.morseCode.length) {
      const groups = config.morseCode.split(NEWLINE_SYMBOL).map((word, wordIndex) => {
        x1 = x2 = config.containerPadding
        if (wordIndex !== 0) {
          // the first line do not need to add height
          y1 += config.lineHeight
          y2 += config.lineHeight
          height += config.lineHeight
        }
        const groupComponent = (
          <g key={y1}>
            {Array.from(word).map((char, charIndex) => {
              if (char === SEPARATE_SYMBOL) {
                x1 += config.letterSpace
                return <></>
              }
              const isDot = char === MorseCodeCharType.dotChar
              x1 = x1 === 0 ? x1 : x1 + config.dotDashSpace
              x2 = x1 + (isDot ? config.dotWidth : config.dashWidth)
              const line = (
                <line
                  key={`${x1}${y1}`}
                  strokeWidth={config.strokeWidth}
                  strokeLinecap='round'
                  className='line'
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                />
              )
              x1 = x2 += config.dotDashSpace
              // calculate the max width for svg container
              if (charIndex === word.length - 1) {
                width = Math.max(width, x2 + config.containerPadding)
              }
              return line
            })}
          </g>
        )
        return groupComponent
      })
      return [
        config.autoCalculateContainerSize ? width : config.containerWidth,
        config.autoCalculateContainerSize ? height : config.containerHeight,
        <>{...groups}</>,
      ]
    }
    return [0, 0, <></>]
  })()
  return (
    <SvgContainer width={width} height={height} stroke={props.stroke}>
      {group}
    </SvgContainer>
  )
}
