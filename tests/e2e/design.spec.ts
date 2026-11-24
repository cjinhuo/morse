import { expect, test } from '@playwright/test'

const screens = [
  { name: 'morse-desktop', url: './', width: 1440, height: 755, title: '摩尔斯训练' },
  { name: 'english-desktop', url: 'latin/', width: 1440, height: 900, title: '英文打字' },
  { name: 'converter-desktop', url: 'converter/', width: 1440, height: 1000, title: '编码转换' },
  { name: 'morse-mobile', url: './', width: 390, height: 900, title: '找到你的发报节奏。' },
]

for (const { name, url, width, height, title } of screens) {
  for (const theme of ['dark', 'light']) {
    test(`${name} matches the ${theme} Pen frame`, async ({ page }) => {
      if (theme === 'light') await page.addInitScript(() => localStorage.setItem('morse-theme', 'light'))
      await page.setViewportSize({ width, height })
      await page.goto(url)
      await expect(page.locator('html')).toHaveAttribute('data-theme', theme)
      await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible()
      await page.evaluate(() => document.fonts.ready)
      await expect(page).toHaveScreenshot(theme === 'dark' ? `${name}.png` : `${name}-light.png`)
    })
  }
}

test('all three desktop footers show only the brand line for the selected theme', async ({ page }) => {
  await page.goto('./')
  for (const theme of ['dark', 'light']) {
    if (theme === 'light') await page.getByRole('button', { name: '切换到浅色主题' }).click()
    for (const { url } of screens.slice(0, 3)) {
      await page.goto(url)
      const footer = page.getByRole('contentinfo')
      await expect(footer).toHaveText(theme === 'light' ? 'MORSETYPE / LIGHT' : 'MORSETYPE / FIND YOUR FREQUENCY', {
        useInnerText: true,
      })
    }
  }
})
