import type { Page } from '@playwright/test'

export async function freezeInputClock(page: Page) {
  await page.clock.install({ time: new Date('2026-01-01T12:00:00Z') })
  await page.clock.pauseAt(new Date('2026-01-01T12:00:01Z'))
}

export async function transmit(page: Page, pattern: string) {
  for (const symbol of pattern) {
    await page.keyboard.down('Space')
    await page.clock.runFor(symbol === '-' ? 180 : 40)
    await page.keyboard.up('Space')
    await page.clock.runFor(30)
  }
  await page.clock.runFor(510)
}
