import { readFile } from 'node:fs/promises'
import { expect, test } from '@playwright/test'

test('conversion accepts punctuation, numbers and line breaks, and clears the preview for empty input', async ({
  page,
}) => {
  await page.goto('converter/')
  const input = page.getByRole('textbox', { name: '输入文字' })
  await expect(input).toHaveValue('HELLO WORLD')
  await input.fill('SOS\n2?中')
  await expect(input).toHaveValue('SOS\n2?')
  await expect(page.getByText('... --- ... / ..--- ..--..', { exact: true })).toBeVisible()
  await expect(page.getByRole('img', { name: '信号预览' })).toBeVisible()
  await input.fill('  ')
  await expect(page.getByText('等待你的第一段文字')).toBeVisible()
  await expect(page.getByRole('button', { name: '导出 SVG' })).toBeDisabled()
  await expect(page.getByRole('button', { name: '复制编码' })).toBeDisabled()
})

test('style settings persist, reset, and affect real SVG and PNG downloads', async ({ page }) => {
  await page.goto('converter/')
  const slider = page.getByRole('slider', { name: '线条粗细' })
  await slider.focus()
  await slider.press('End')
  await page.reload()
  await expect(slider).toHaveValue('10')
  const input = page.getByRole('textbox', { name: '输入文字' })
  await input.fill('A')
  const dashSlider = page.getByRole('slider', { name: '长划宽度' })
  await dashSlider.press('Home')
  const graphic = page.getByRole('img', { name: '信号预览' })
  const diameter = 2 * Number(await graphic.locator('circle').getAttribute('r'))
  const shortest = Number(await graphic.locator('rect').getAttribute('width'))
  expect(shortest).toBeGreaterThan(diameter)
  await dashSlider.press('ArrowRight')
  const dash = Number(await graphic.locator('rect').getAttribute('width'))
  expect(dash).toBeGreaterThan(shortest)
  const svgDownload = page.waitForEvent('download')
  await page.getByRole('button', { name: '导出 SVG' }).click()
  const svg = await svgDownload
  const xml = await readFile((await svg.path())!, 'utf8')
  expect(xml).toContain('<svg')
  expect(xml).toContain('>A</text>')
  expect(xml).not.toContain('var(--')
  const exported = await page.evaluate((xml) => {
    const svg = new DOMParser().parseFromString(xml, 'image/svg+xml').documentElement
    return { dash: Number(svg.querySelector('rect')?.getAttribute('width')), width: Number(svg.getAttribute('width')) }
  }, xml)
  expect(exported.dash).toBe(dash)
  const pngDownload = page.waitForEvent('download')
  await page.getByRole('button', { name: '导出 PNG' }).click()
  const png = await pngDownload
  const bytes = await readFile((await png.path())!)
  expect(bytes.subarray(1, 4).toString()).toBe('PNG')
  expect(bytes.readUInt32BE(16)).toBe(Math.ceil(exported.width * 2))
  await page.getByRole('button', { name: '重置' }).click()
  await expect(slider).toHaveValue('3')
})

test('copied Morse matches the visible code', async ({ page, context, browserName }) => {
  if (browserName === 'chromium') await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('converter/')
  await page.getByRole('textbox', { name: '输入文字' }).fill('CQ DX')
  await page.getByRole('button', { name: '复制编码' }).click()
  await expect(page.getByRole('button', { name: '已复制' })).toBeVisible()
  const input = page.getByRole('textbox', { name: '输入文字' })
  await input.fill('')
  await input.press('ControlOrMeta+v')
  await expect(input).toHaveValue('-.-. --.- / -.. -..-')
})

test('previously saved partial styles keep their overrides and inherit missing defaults', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('morse-svg-config', '{"strokeWidth":7}'))
  await page.goto('converter/')
  await expect(page.getByRole('slider', { name: '线条粗细' })).toHaveValue('7')
  await expect(page.getByRole('slider', { name: '长划宽度' })).toHaveValue('12')
  const graphic = page.getByRole('img', { name: '信号预览' })
  await expect(graphic).not.toHaveAttribute('viewBox', /NaN/)
  await expect(graphic.locator('circle').first()).toHaveAttribute('r', '7')
})
