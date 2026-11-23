import { expect, test } from '@playwright/test'
import { freezeInputClock, transmit } from './transmission'

for (const change of ['next exercise', 'same exercise'] as const) {
  test(`an English edit made before notification cannot replace a newer tab's ${change}`, async ({ page, context }) => {
    const key = 'morse:progress:v1:latin'
    await page.goto('latin/')
    await page.getByRole('button', { name: '重新开始' }).click()
    const editor = page.getByRole('textbox', { name: '英文练习输入' })
    await editor.fill('I see')
    const older = await page.evaluate((key) => localStorage.getItem(key), key)
    const newer = await context.newPage()
    await newer.goto('latin/')
    if (change === 'next exercise') await newer.getByRole('button', { name: '换一组' }).click()
    const otherEditor = newer.getByRole('textbox', { name: '英文练习输入' })
    await otherEditor.fill('It')
    const latest = await newer.evaluate((key) => localStorage.getItem(key), key)
    if (!older || !latest) throw new Error('Expected both tabs to save their progress')
    await page.evaluate(({ key, older }) => localStorage.setItem(key, older), { key, older })
    await page.reload()
    await expect(editor).toHaveValue('I see')
    // Make the other tab's write visible between native insertion and React's input handler.
    await editor.evaluate(
      (input, { key, latest }) => {
        input.addEventListener('input', () => localStorage.setItem(key, latest), { capture: true, once: true })
      },
      { key, latest }
    )
    await editor.press('x')
    await expect(editor).toHaveValue('It')
    await newer.reload()
    await expect(otherEditor).toHaveValue('It')
    await editor.press('s')
    await expect(otherEditor).toHaveValue('Its')
  })
}

test('English restores mistakes, focus and the caret, and resumes timing on the next input', async ({ page }) => {
  await page.goto('latin/')
  const editor = page.getByRole('textbox', { name: '英文练习输入' })
  const elapsed = page.locator('.metrics dd').last()
  await page.getByRole('button', { name: '重新开始' }).click()
  await page.clock.setFixedTime(new Date('2026-01-01T12:00:00Z'))
  await page.getByRole('button', { name: '专注模式' }).click()
  await editor.fill('X')
  await page.clock.setFixedTime(new Date('2026-01-01T12:00:12Z'))
  await expect(elapsed).toHaveText('00:12')
  await page.reload()
  await expect(editor).toHaveValue('X')
  await expect(page.getByRole('button', { name: '退出专注' })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('[data-state="error"]')).toHaveText('I')
  expect(await editor.evaluate((input: HTMLTextAreaElement) => input.selectionStart)).toBe(1)
  await page.clock.setFixedTime(new Date('2026-01-01T12:10:12Z'))
  await expect(elapsed).toHaveText('00:12')
  await editor.press('Backspace')
  await expect(page.locator('[data-state="error"]')).toHaveCount(0)
  await page.clock.setFixedTime(new Date('2026-01-01T12:10:14Z'))
  await expect(elapsed).toHaveText('00:14')
  await editor.press('I')
  await page.getByRole('button', { name: '退出专注' }).click()
  await page.clock.setFixedTime(new Date('2026-01-01T12:10:17Z'))
  await page.getByRole('link', { name: '编码转换' }).click()
  await expect(page.getByRole('textbox', { name: '输入文字' })).toBeVisible()
  await page.clock.setFixedTime(new Date('2026-01-01T12:20:17Z'))
  await page.goBack()
  await expect(editor).toHaveValue('I')
  await expect(elapsed).toHaveText('00:17')
})

test('a converter draft keeps case and whitespace across history and stays empty when reopened', async ({
  page,
  context,
}) => {
  await page.goto('converter/')
  const draft = page.getByRole('textbox', { name: '输入文字' })
  await draft.fill('  Sos\n42?  ')
  await page.getByRole('link', { name: '英文打字' }).click()
  await page.goBack()
  await expect(draft).toHaveValue('  Sos\n42?  ')
  await page.goForward()
  await expect(page.getByRole('heading', { name: '英文打字' })).toBeVisible()
  await page.goBack()
  await draft.fill('')
  await page.reload()
  await expect(draft).toHaveValue('')
  await page.close()
  const reopened = await context.newPage()
  await reopened.goto('converter/')
  await expect(reopened.getByRole('textbox', { name: '输入文字' })).toHaveValue('')
  await expect(reopened.getByRole('button', { name: '导出 SVG' })).toBeDisabled()
})

test('Morse restores confirmed letters across screen sizes and discards a partial letter on reload', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 900 })
  await page.goto('./')
  const key = page.getByRole('button', { name: '按住发报' })
  await expect(key).toBeVisible()
  await freezeInputClock(page)
  await key.focus()
  await page.keyboard.down('Space')
  await page.clock.runFor(180)
  await page.keyboard.up('Space')
  await page.reload()
  await page.clock.resume()
  await expect(page.getByRole('img', { name: '等待输入' })).toBeVisible()
  await expect(page.locator('[aria-current="step"]')).toHaveAttribute('data-char', 'O')
  await key.focus()
  await transmit(page, '---')
  await page.setViewportSize({ width: 1440, height: 913 })
  await page.reload()
  await expect(page.locator('.practice-text')).toHaveAttribute('aria-label', 'SOS')
  await expect(page.locator('[aria-current="step"]')).toHaveAttribute('data-char', 'S')
  await page.getByRole('button', { name: /SPACE/ }).focus()
  await transmit(page, '...')
  await expect(page.getByRole('dialog')).toContainText('100%')
  await page.keyboard.press('Escape')
  await page.reload()
  await expect(page.getByRole('button', { name: '查看结果' })).toBeVisible()
  await expect(page.getByRole('dialog')).toHaveCount(0)
})

test('completed results stay frozen and restarting or changing sets persists even before typing', async ({ page }) => {
  await page.goto('latin/')
  await page.getByRole('button', { name: '换一组' }).click()
  const editor = page.getByRole('textbox', { name: '英文练习输入' })
  const lesson = await page.locator('.practice-text').getAttribute('aria-label')
  if (!lesson) throw new Error('Expected a sentence')
  await page.clock.setFixedTime(new Date('2026-01-01T12:00:00Z'))
  await editor.fill(lesson[0])
  await page.clock.setFixedTime(new Date('2026-01-01T12:00:04Z'))
  await editor.fill(lesson)
  const result = page.getByRole('dialog')
  await expect(result).toContainText('00:04')
  await page.reload()
  await page.clock.setFixedTime(new Date('2026-01-01T12:02:04Z'))
  await expect(result).toContainText('00:04')
  await expect(result).toContainText('100%')
  await result.getByRole('button', { name: '再练一次' }).click()
  await page.reload()
  await expect(editor).toHaveValue('')
  await expect(page.locator('.practice-text')).toHaveAttribute('aria-label', lesson)
  await page.getByRole('button', { name: '换一组' }).click()
  const next = await page.locator('.practice-text').getAttribute('aria-label')
  if (!next) throw new Error('Expected the next sentence')
  expect(next).not.toBe(lesson)
  await page.reload()
  await expect(page.locator('.practice-text')).toHaveAttribute('aria-label', next)
  await expect(editor).toHaveValue('')
})

test('another tab takes over a practice and closing the older one preserves the latest edit', async ({
  page,
  context,
}) => {
  await page.goto('latin/')
  const editor = page.getByRole('textbox', { name: '英文练习输入' })
  await page.getByRole('button', { name: '重新开始' }).click()
  await editor.fill('I')
  const newer = await context.newPage()
  await newer.goto('latin/')
  const otherEditor = newer.getByRole('textbox', { name: '英文练习输入' })
  await expect(otherEditor).toHaveValue('I')
  await otherEditor.fill('I see')
  await expect(editor).toHaveValue('I see')
  await page.close()
  await newer.reload()
  await expect(otherEditor).toHaveValue('I see')
})

test('a damaged practice falls back to its example and leaves the converter draft usable', async ({ page }) => {
  await page.goto('converter/')
  await page.getByRole('textbox', { name: '输入文字' }).fill('saved')
  await page.evaluate(() => localStorage.setItem('morse:progress:v1:latin', '{"typed":123}'))
  await page.goto('latin/')
  const editor = page.getByRole('textbox', { name: '英文练习输入' })
  await expect(editor).toHaveValue('I see dexd people ')
  await page.evaluate(() => localStorage.setItem('morse:progress:v1:latin', '{'))
  await page.reload()
  await expect(editor).toHaveValue('I see dexd people ')
  await editor.fill('I')
  await page.reload()
  await expect(editor).toHaveValue('I')
  await page.getByRole('link', { name: '编码转换' }).click()
  await expect(page.getByRole('textbox', { name: '输入文字' })).toHaveValue('saved')
})

test('pagehide preserves a newer disk record even before its storage notification arrives', async ({
  page,
  context,
}) => {
  const key = 'morse:progress:v1:latin'
  const other = await context.newPage()
  await other.goto('latin/')
  await other.getByRole('textbox', { name: '英文练习输入' }).fill('I see')
  const latest = await other.evaluate((key) => localStorage.getItem(key), key)
  if (!latest) throw new Error('Expected the other tab to save its input')
  await other.close()
  await page.goto('latin/')
  const editor = page.getByRole('textbox', { name: '英文练习输入' })
  await editor.fill('X')
  // Deliver the other writer's value and pagehide in the same task, before any storage event can run.
  await page.evaluate(
    ({ key, latest }) => {
      localStorage.setItem(key, latest)
      window.dispatchEvent(new Event('pagehide'))
    },
    { key, latest }
  )
  await page.reload()
  await expect(editor).toHaveValue('I see')
})

test('a rejected write preserves local edits until another tab saves a newer draft', async ({ page, context }) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new DOMException('Full', 'QuotaExceededError')
    }
  })
  await page.goto('latin/')
  const editor = page.getByRole('textbox', { name: '英文练习输入' })
  await editor.fill('I see')
  await page.getByRole('link', { name: '编码转换' }).click()
  const draft = page.getByRole('textbox', { name: '输入文字' })
  await draft.fill('SOS')
  await page.goBack()
  await expect(editor).toHaveValue('I see')
  await page.goForward()
  await expect(draft).toHaveValue('SOS')
  const writable = await context.newPage()
  await writable.goto('converter/')
  await writable.getByRole('textbox', { name: '输入文字' }).fill('new draft')
  await expect(draft).toHaveValue('new draft')
})

test('blocked storage reads at startup allow a full in-memory session', async ({ page }) => {
  await page.addInitScript(() => {
    const denied = () => {
      throw new DOMException('Storage unavailable', 'SecurityError')
    }
    Storage.prototype.getItem = denied
    Storage.prototype.setItem = denied
  })
  await page.goto('converter/')
  const draft = page.getByRole('textbox', { name: '输入文字' })
  await draft.fill('Local')
  await page.getByRole('link', { name: '英文打字' }).click()
  await page.getByRole('textbox', { name: '英文练习输入' }).fill('X')
  await page.goBack()
  await expect(draft).toHaveValue('Local')
  await page.goForward()
  await expect(page.getByRole('textbox', { name: '英文练习输入' })).toHaveValue('X')
})

test('leaving the whole document pauses time and browser Back restores the active character', async ({ page }) => {
  await page.goto('latin/')
  const editor = page.getByRole('textbox', { name: '英文练习输入' })
  await page.clock.setFixedTime(new Date('2026-01-01T12:00:00Z'))
  await editor.fill('I s')
  await page.clock.setFixedTime(new Date('2026-01-01T12:00:12Z'))
  await page.goto('about:blank')
  await page.clock.setFixedTime(new Date('2026-01-01T12:10:12Z'))
  await page.goBack()
  await expect(editor).toHaveValue('I s')
  await expect(page.locator('[aria-current="step"]')).toHaveAttribute('data-char', 'e')
  await editor.press('e')
  await expect(page.locator('.metrics dd').last()).toHaveText('00:12')
})
