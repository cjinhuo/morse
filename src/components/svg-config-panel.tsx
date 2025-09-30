import { useState, useCallback } from 'react'
import { useAtom } from 'jotai'
import { Button, Form, Popover, Typography } from '@douyinfe/semi-ui'
import { IconSetting } from '@douyinfe/semi-icons'
import { defaultSvgConfig, svgConfigAtom, type SvgConfig } from '../atom/svg-config-atom'
import type { FormApi } from '@douyinfe/semi-ui/lib/es/form/interface'

export default function SvgConfigPanel() {
  const [svgConfig, setSvgConfig] = useAtom(svgConfigAtom)
  const [visible, setVisible] = useState(false)
  const [formApi, setFormApi] = useState<FormApi<SvgConfig> | null>(null)

  const handleValueChange = useCallback(
    (_values: SvgConfig, changedValue: Partial<SvgConfig>) => {
      setSvgConfig((preValues) => ({
        ...preValues,
        ...changedValue,
      }))
    },
    [setSvgConfig]
  )

  const handleReset = useCallback(() => {
    if (formApi) {
      formApi.setValues(defaultSvgConfig)
      setSvgConfig(defaultSvgConfig)
    }
  }, [formApi, setSvgConfig])

  const configContent = (
    <div className='w-80 p-4'>
      <div className='flex items-center justify-between mb-2'>
        <Typography.Title heading={6}>SVG Config</Typography.Title>
        <Button size='small' onClick={handleReset}>
          Reset
        </Button>
      </div>

      <Form
        getFormApi={setFormApi}
        initValues={svgConfig}
        onValueChange={handleValueChange}
        layout='vertical'
        style={{ gap: '10px' }}
      >
        <Form.Slider field='strokeWidth' label='Stroke Width' min={1} max={10} step={0.5} />

        <Form.Slider field='dashWidth' label='Dash Width' min={5} max={30} step={1} />

        <Form.Slider field='lineHeight' label='Line Height' min={15} max={50} step={1} />

        <Form.Slider field='letterSpace' label='Letter Spacing' min={5} max={30} step={1} />

        <Form.Slider field='dotDashSpace' label='Dot Dash Spacing' min={2} max={15} step={1} />

        <Form.Slider field='containerPadding' label='Container Padding' min={10} max={50} step={1} />
      </Form>
    </div>
  )

  return (
    <Popover content={configContent} visible={visible} onVisibleChange={setVisible} trigger='click' position='left'>
      <Button icon={<IconSetting />} size='small' type='tertiary' aria-label='配置 SVG 参数'>
        SVG Config
      </Button>
    </Popover>
  )
}
