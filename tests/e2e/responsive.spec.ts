import { expect, test } from '@playwright/test'
import { freezeInputClock } from './transmission'

test('both header layouts display the active favicon when the theme changes', async ({ page }) => {
  await page.goto('./')
  const favicon = page.locator('head link[rel="icon"]')
  const mark = page.locator('header .brand [aria-hidden="true"]')
  async function expectMatchingIcon() {
    const href = await favicon.evaluate((link: HTMLLinkElement) => link.href)
    await expect(mark).toBeVisible()
    await expect(mark).toHaveCSS('background-image', `url("${href}")`)
  }

  await expectMatchingIcon()
  await page.getByRole('button', { name: '切换到浅色主题' }).click()
  await expect(favicon).toHaveAttribute('href', /\/favicon-light\.svg$/)
  await expectMatchingIcon()

  await page.setViewportSize({ width: 390, height: 900 })
  await page.getByLabel('MorseType 菜单').click()
  await expectMatchingIcon()
  await page.getByRole('button', { name: '切换到暗色主题' }).click()
  await expect(favicon).toHaveAttribute('href', /\/favicon\.svg$/)
  await expectMatchingIcon()
  const lightThemeButton = page.getByRole('button', { name: '切换到浅色主题' })
  await expect(lightThemeButton).toBeVisible()
  await page.getByRole('heading', { level: 1 }).click()
  await expect(lightThemeButton).toBeHidden()
})

test('a held pointer releases a single dash after its original transmit button is replaced', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('button', { name: '换一组' }).click()
  const button = await page.getByRole('button', { name: /SPACE/ }).boundingBox()
  if (!button) throw new Error('Missing transmit button')
  await freezeInputClock(page)
  await page.mouse.move(button.x + button.width / 2, button.y + button.height / 2)
  await page.mouse.down()
  await page.clock.runFor(180)
  await page.setViewportSize({ width: 390, height: 900 })
  const phoneKey = page.getByRole('button', { name: '按住发报' })
  await expect(phoneKey).toHaveAttribute('aria-pressed', 'true')
  await page.mouse.move(100, 100)
  await page.mouse.up()
  await expect(phoneKey).toHaveAttribute('aria-pressed', 'false')
  await expect(page.getByRole('img', { name: '−', exact: true })).toBeVisible()
  await page.clock.runFor(500)
  await expect(page.locator('[aria-current="step"]')).toHaveAttribute('data-char', 'O')
})

test('a released Morse mark and its confirmation deadline survive switching both layouts', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('button', { name: '换一组' }).click()
  const desktopKey = page.getByRole('button', { name: /SPACE/ })
  await desktopKey.focus()
  await freezeInputClock(page)
  await page.keyboard.press('Space')
  await page.clock.runFor(100)
  await page.setViewportSize({ width: 390, height: 900 })
  await expect(page.getByRole('img', { name: '·', exact: true })).toBeVisible()
  const phoneKey = page.getByRole('button', { name: '按住发报' })
  await phoneKey.click()
  await page.clock.runFor(100)
  await phoneKey.click()
  await expect(page.getByRole('img', { name: '· · ·', exact: true })).toBeVisible()
  await page.clock.runFor(450)
  await page.setViewportSize({ width: 1440, height: 913 })
  await expect(desktopKey).toBeVisible()
  const active = page.locator('[aria-current="step"]')
  await expect(active).toHaveAttribute('data-char', 'S')
  await page.clock.runFor(50)
  await expect(active).toHaveAttribute('data-char', 'O')
  await expect(page.locator('[data-state="correct"]')).toHaveText('S')
})

test('resizing reflows the sentence, keeps the active hint anchored, and preserves an ongoing transmission', async ({
  page,
}) => {
  await page.goto('./')
  await page.clock.install()
  await expect(page.getByRole('button', { name: /SPACE/ })).toBeVisible()
  await page.keyboard.down('Space')
  await page.clock.runFor(45)
  await page.keyboard.up('Space')
  await page.clock.runFor(510)
  for (const width of [1024, 768, 390, 320, 1440]) {
    await page.setViewportSize({ width, height: 840 })
    await expect(page.locator(width < 768 ? '.phone-console' : '.morse-console')).toBeVisible()
    const current = page.locator('[aria-current="step"]')
    await expect(current).toHaveAttribute('data-char', 'V')
    const letter = await current.boundingBox()
    const hint = await current.locator('.signal-hint,.phone-hint').boundingBox()
    if (!letter || !hint) throw new Error('The active character lost its code')
    expect(Math.abs(letter.x + letter.width / 2 - hint.x - hint.width / 2)).toBeLessThan(2)
    expect(hint.y + hint.height).toBeLessThanOrEqual(letter.y)
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width)
  }
})

test('opening the reference interrupts buffered input and navigating away cancels an unfinished key press', async ({
  page,
}) => {
  await page.goto('./')
  await page.clock.install()
  await page.keyboard.press('Space')
  await page.getByRole('button', { name: '摩尔斯速查表' }).click()
  await page.clock.runFor(700)
  await page.keyboard.press('Escape')
  await expect(page.locator('[aria-current="step"]')).toHaveAttribute('data-char', 'O')
  await page.getByRole('button', { name: /SPACE/ }).focus()
  await page.keyboard.down('Space')
  await page.getByRole('link', { name: '编码转换' }).click()
  await page.keyboard.up('Space')
  await page.clock.runFor(700)
  await expect(page.getByRole('textbox', { name: '输入文字' })).toHaveValue('HELLO WORLD')
})

test('older hash bookmarks open their matching practice page', async ({ page }) => {
  await page.goto('./#/converter/?lesson=2')
  await expect(page).toHaveURL(/\/morse\/converter\/\?lesson=2$/)
  await expect(page.getByRole('heading', { name: '编码转换' })).toBeVisible()
})

test('a first-line code hint leaves the exercise counter readable', async ({ page }) => {
  await page.goto('./')
  await page.getByRole('button', { name: '换一组' }).click()
  const status = await page.locator('.reading-status').boundingBox()
  const hint = await page.locator('.signal-hint').boundingBox()
  if (!status || !hint) throw new Error('Missing exercise counter or signal hint')
  expect(hint.y - status.y - status.height).toBeGreaterThanOrEqual(8)
})
