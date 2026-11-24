import { expect, test } from '@playwright/test'
import { freezeInputClock, transmit } from './transmission'

test.use({ hasTouch: true, viewport: { width: 390, height: 900 } })

test('real touch taps produce one mark per tap and score only the performed characters', async ({ page }) => {
  await page.goto('./')
  const key = page.getByRole('button', { name: '按住发报' })
  const box = await key.boundingBox()
  if (!box) throw new Error('Missing touch key')
  await freezeInputClock(page)
  const tap = () => page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2)
  await tap()
  await page.clock.runFor(550)
  await expect(page.locator('[data-state="error"]')).toHaveText(['A', 'O'])
  for (let i = 0; i < 3; i++) {
    await tap()
    await page.clock.runFor(30)
  }
  await page.clock.runFor(550)
  await expect(page.locator('[data-state="error"]')).toHaveText(['A', 'O', 'D'])
  for (const code of ['.--', '.-.', '---', '..-', '--.', '....', '-']) await transmit(page, code)
  await expect(page.getByRole('dialog')).toContainText('77.8%')
})

test('phone keyboard enters text and keeps editing after a correction', async ({ page }) => {
  await page.goto('latin/')
  const editor = page.getByRole('textbox', { name: '英文练习输入' })
  await editor.tap()
  await page.keyboard.insertText('X')
  await expect(page.getByText('17 / 44 CHARACTERS')).toBeVisible()
  await page.keyboard.press('Backspace')
  await page.keyboard.insertText('fox')
  await expect(page.getByText('19 / 44 CHARACTERS')).toBeVisible()
})
