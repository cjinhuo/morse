import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  workers: 4,
  forbidOnly: !!process.env.CI,
  reporter: 'list',
  snapshotPathTemplate: '{testDir}/design/{arg}{ext}',
  expect: { timeout: 4000, toHaveScreenshot: { animations: 'disabled', maxDiffPixelRatio: 0.01 } },
  use: {
    baseURL: 'http://127.0.0.1:4277/morse/',
    viewport: { width: 1440, height: 913 },
    locale: 'zh-CN',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  webServer: {
    env: { PLAYWRIGHT_TEST: '1' },
    command: 'pnpm build && pnpm exec rsbuild preview --host 127.0.0.1 --port 4277 --strict-port',
    url: 'http://127.0.0.1:4277/morse/',
    reuseExistingServer: false,
  },
})
