import { useAtom } from 'jotai'
import { defaultSvgConfig, styleFields, svgConfigAtom } from '../atom/svg-config-atom'
import { useCopy } from '../shared/preferences'

export default function SvgConfigPanel() {
  const [config, setConfig] = useAtom(svgConfigAtom)
  const t = useCopy()
  return (
    <aside className='console settings' aria-label={t('图形样式', 'Graphic style')}>
      <header className='between'>
        <h2>{t('图形样式', 'Graphic style')}</h2>
        <button className='accent' type='button' onClick={() => setConfig(defaultSvgConfig)}>
          {t('重置', 'Reset')}
        </button>
      </header>
      {styleFields.map(([key, zh, en, min, max, step]) => (
        <div key={key} className='style-field'>
          <div className='between'>
            <label htmlFor={key}>{t(zh, en)}</label>
            <output htmlFor={key} className='meta'>
              {config[key]} px
            </output>
          </div>
          <div className='range-control'>
            <progress aria-hidden='true' max={max - min} value={config[key] - min} />
            <input
              id={key}
              type='range'
              min={min}
              max={max}
              step={step}
              value={config[key]}
              onChange={(e) => setConfig({ ...config, [key]: e.target.valueAsNumber })}
            />
          </div>
        </div>
      ))}
      <div className='settings-tip'>
        <span className='meta'>MADE TO SHARE</span>
        <p>{t('SVG 适合无损缩放；PNG 方便保存与分享。', 'SVG scales without loss. PNG is easy to save and share.')}</p>
      </div>
    </aside>
  )
}
