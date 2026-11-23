import { useAtom, useAtomValue } from 'jotai'
import { Check, Copy, Download, ImageIcon, ScanLine } from 'lucide-react'
import { useRef, useState } from 'react'
import { localRecord } from '../../atom/local-record'
import { svgConfigAtom } from '../../atom/svg-config-atom'
import MorseCodeSvg from '../../components/morse-code-svg'
import PageHeading from '../../components/page-heading'
import SvgConfigPanel from '../../components/svg-config-panel'
import { encodeWords, formatCode, supportedText } from '../../shared/morse'
import { useCopy } from '../../shared/preferences'
import { exportImage } from './export-image'

const draft = localRecord(
  'morse:progress:v1:converter',
  'HELLO WORLD',
  (value): value is string => typeof value === 'string'
)

export default function MorseConverter() {
  const t = useCopy()
  const [draftAtom] = useState(draft.createAtom)
  const [text, setText] = useAtom(draftAtom)
  const [copied, setCopied] = useState('')
  const [error, setError] = useState('')
  const config = useAtomValue(svgConfigAtom)
  const svg = useRef<SVGSVGElement>(null)
  const words = encodeWords(text)
  const code = formatCode(words)
  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(code)
      setError('')
    } catch {
      setError(t('请选中下方编码复制。', 'Select the code below to copy it.'))
    }
  }
  async function save(format: 'svg' | 'png') {
    if (!svg.current) return
    try {
      await exportImage(svg.current, format)
      setError('')
    } catch {
      setError(t('图片导出失败，请重试。', 'Image export failed. Please try again.'))
    }
  }
  return (
    <section className='page converter-page'>
      <PageHeading
        title={t('编码转换', 'Converter')}
        description={t(
          '输入文字，预览摩尔斯码，导出 SVG 或 PNG。',
          'Enter text, preview Morse code and export an SVG or PNG.'
        )}
        eyebrow='ENCODE / 03'
      />
      <div className='conversion-workspace'>
        <div className='conversion-main'>
          <div className='console text-panel'>
            <div className='between'>
              <label htmlFor='source-text'>{t('输入文字', 'Input text')}</label>
              <span className='meta'>TEXT</span>
            </div>
            <textarea
              id='source-text'
              rows={Math.min(text.split('\n').length, 8)}
              value={text}
              spellCheck={false}
              onChange={(e) => {
                setText(supportedText(e.target.value))
                setCopied('')
                setError('')
              }}
            />
            <div className='between helper'>
              <span>{t('支持英文字母、数字与标点', 'Letters, numbers and punctuation')}</span>
              <span className='meta'>{text.length} CHAR</span>
            </div>
          </div>
          <div className='console preview-panel'>
            <header className='between'>
              <h2>{t('信号预览', 'Signal preview')}</h2>
              <span className={`meta live-indicator${code ? ' live' : ''}`}>
                {code ? t('已转换', 'Converted') : t('等待输入', 'Waiting')}
              </span>
            </header>
            <div className='vector-preview'>
              {code ? (
                <MorseCodeSvg ref={svg} words={words} config={config} />
              ) : (
                <div className='empty-preview'>
                  <h3>
                    <ScanLine size={18} />
                    {t('等待你的第一段文字', 'Waiting for your first message')}
                  </h3>
                  <p>
                    {t(
                      '输入英文字母、数字或标点后，编码预览会显示在这里。',
                      'Enter letters, numbers or punctuation to see your signal here.'
                    )}
                  </p>
                </div>
              )}
            </div>
            <div className='between helper preview-info'>
              <span className='meta'>VECTOR PREVIEW</span>
              <span>{t('导出为独立图片', 'Export as a standalone image')}</span>
            </div>
          </div>
          <div className='code-output'>
            <div className='between'>
              <span className='meta'>MORSE CODE</span>
              <button className='text-button accent' type='button' disabled={!code} onClick={copy}>
                {copied && copied === code ? <Check size={15} /> : <Copy size={15} />}
                {copied && copied === code ? t('已复制', 'Copied') : t('复制编码', 'Copy code')}
              </button>
            </div>
            <output aria-label={t('摩尔斯编码', 'Morse code')}>{code}</output>
          </div>
          <div className='actions'>
            <button className='button primary' type='button' disabled={!code} onClick={() => save('svg')}>
              <Download size={16} />
              {t('导出 SVG', 'Export SVG')}
            </button>
            <button className='button' type='button' disabled={!code} onClick={() => save('png')}>
              <ImageIcon size={16} />
              {t('导出 PNG', 'Export PNG')}
            </button>
          </div>
          {error && <p role='alert'>{error}</p>}
        </div>
        <SvgConfigPanel />
      </div>
    </section>
  )
}
