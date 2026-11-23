import { expect, test } from '@playwright/test'

const screens = [
  { name: 'morse-desktop', url: './', width: 1440, height: 913, title: '摩尔斯训练' },
  { name: 'english-desktop', url: 'latin/', width: 1440, height: 900, title: '英文打字' },
  { name: 'converter-desktop', url: 'converter/', width: 1440, height: 1000, title: '编码转换' },
  { name: 'morse-mobile', url: './', width: 390, height: 900, title: '找到你的发报节奏。' },
]

for (const { name, url, width, height, title } of screens) {
  test(`${name} matches the selected Pen frame`, async ({ page }) => {
    await page.setViewportSize({ width, height })
    await page.goto(url)
    await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible()
    await page.evaluate(() => document.fonts.ready)
    await expect(page).toHaveScreenshot(`${name}.png`)
  })
}
