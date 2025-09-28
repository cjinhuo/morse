import { useEffect, useRef, useState } from 'react'
import { useAtomValue } from 'jotai'
import { TextArea, Button, Typography, Space, Input } from '@douyinfe/semi-ui'
import MorseCodeSvg from '../../components/morse-code-svg'
import SvgConfigPanel from '../../components/svg-config-panel'
import { transformStringToMorseCode } from '../../shared/utils'
import { LATIN_ALLOWED_INPUT_KEYS_SET } from '../../shared/constants'
import { svgConfigAtom } from '../../atom/svg-config-atom'

export default function MorseConverter() {
  const [inputText, setInputText] = useState('')
  const [morseCode, setMorseCode] = useState('')
  const svgConfig = useAtomValue(svgConfigAtom)
  const svgRef = useRef<SVGSVGElement>(null)


  const handleInputChange = (value: string) => {
    // Only allow characters in LATIN_ALLOWED_INPUT_KEYS_SET and spaces
    const filteredValue = value.split('').filter(char => {
      return LATIN_ALLOWED_INPUT_KEYS_SET.has(char) || char === ' '
    }).join('')
    
    setInputText(filteredValue)

    if (filteredValue.trim()) {
      const morse = transformStringToMorseCode(filteredValue)
      setMorseCode(morse)
    } else {
      setMorseCode('')
    }
  }

  const handleExportAsPNG = () => {
    if (!svgRef.current) return

    const svg = svgRef.current
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    // Get SVG dimensions
    const svgRect = svg.getBoundingClientRect()
    const scale = 2 // Increase export image clarity

    canvas.width = svgRect.width * scale
    canvas.height = svgRect.height * scale

    // Set white background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Convert SVG to image
    const svgData = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const svgUrl = URL.createObjectURL(svgBlob)

    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Download image
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `morse-code-${Date.now()}.png`
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          URL.revokeObjectURL(url)
        }
        URL.revokeObjectURL(svgUrl)
      })
    }
    img.src = svgUrl
  }

  const handleExportAsSVG = () => {
    if (!svgRef.current) return

    const svgData = new XMLSerializer().serializeToString(svgRef.current)
    console.log('svgData',svgData)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    const a = document.createElement('a')
    a.href = url
    a.download = `morse-code-${Date.now()}.svg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const isLocalEnv = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

  return (
    <div className='w-full h-full'>
      <div className='mx-auto max-w-[1200px] space-y-4'>
        <div className='text-center'>
          <Typography.Title className='mb-2 text-3xl font-bold'>Morse Code Converter</Typography.Title>
        </div>

        {/* Input Section */}
        <div className='space-y-4'>
          <Typography.Title className='text-xl font-semibold'>Input Text</Typography.Title>
          <TextArea
            value={inputText}
            onChange={handleInputChange}
            placeholder='Enter Latin characters, numbers and punctuation marks...'
            autosize={{ minRows: 4, maxRows: 8 }}
            className='w-full'
          />
          
          {/* Show morse code text only in local environment */}
          {isLocalEnv && morseCode && (
            <div className='space-y-2'>
              <Typography.Text strong>Morse Code</Typography.Text>
              <Input value={morseCode} readOnly/>
            </div>
          )}
        </div>

        {/* SVG Preview and Export */}
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <Typography.Title className='text-xl font-semibold'>SVG Preview</Typography.Title>
            <SvgConfigPanel />
          </div>
          <div className='border rounded'>
            {morseCode ? (
              <div className='w-full h-full overflow-x-scroll p-1'>
                  <MorseCodeSvg
                    key={morseCode}
                    ref={svgRef}
                    morseCode={morseCode}
                    strokeWidth={svgConfig.strokeWidth}
                    dashWidth={svgConfig.dashWidth}
                    lineHeight={svgConfig.lineHeight}
                    letterSpace={svgConfig.letterSpace}
                    dotDashSpace={svgConfig.dotDashSpace}
                    containerPadding={svgConfig.containerPadding}
                    stroke='currentColor'
                  />
              </div>
            ) : (
              <div className='flex items-center justify-center min-h-[200px] p-1'>
                <Typography.Text type='tertiary'>Morse code SVG will appear here after input</Typography.Text>
              </div>
            )}
          </div>

          {morseCode && (
            <div className='flex gap-3'>
              <Button onClick={handleExportAsPNG} type='primary'>
                Export as PNG
              </Button>
              <Button onClick={handleExportAsSVG} type='secondary'>
                Export as SVG
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
