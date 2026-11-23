import { expect, test } from '@playwright/test'
import { freezeInputClock, transmit } from './transmission'

test('quick reference, invalid signal, and completion render the Pen feedback components', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('./')
  await page.getByRole('button', { name: '换一组' }).click()
  await page.getByRole('button', { name: '摩尔斯速查表' }).click()
  await expect(page.getByRole('dialog')).toHaveScreenshot('reference.png')
  await page.keyboard.press('Escape')
  const key = page.getByRole('button', { name: /SPACE/ })
  await key.focus()
  await freezeInputClock(page)
  await transmit(page, '..--.')
  await expect(page.getByRole('alert')).toHaveScreenshot('invalid-signal.png')
  await transmit(page, '...')
  await transmit(page, '---')
  await page.setViewportSize({ width: 1440, height: 913 })
  await page.clock.runFor(2600)
  await transmit(page, '...')
  const result = page.getByRole('dialog', { name: '信号已送达。' })
  await expect(result).toContainText('00:06')
  await expect(result).toHaveScreenshot('completion.png')
})

test('empty preview matches the Pen empty state', async ({ page }) => {
  await page.goto('converter/')
  await page.getByRole('textbox', { name: '输入文字' }).fill('')
  await expect(page.locator('.empty-preview')).toHaveScreenshot('empty.png')
})
