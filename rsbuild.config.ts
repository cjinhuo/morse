import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { ALL_MORSE_CODE_MAP } from './src/shared/constants'
import { pages, siteBase, siteName } from './src/shared/page-meta'

const faviconDir = 'static/icons'

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: Object.fromEntries(
      Object.keys(pages).map((name) => [name, name === 'chart/index' ? './src/chart.ts' : './src/index.tsx'])
    ),
  },
  output: {
    distPath: { favicon: faviconDir },
    copy: [
      ...['more_play.png', 'export_pic.png', 'latin_play.png'].map((image) => ({
        from: `./docs/${image}`,
        to: `static/social/${image}`,
      })),
      // Keep the dark icon available on rebuilds that reuse the generated HTML.
      { from: './public/favicon.svg', to: `${faviconDir}/favicon.svg` },
      {
        from: './public/favicon.svg',
        to: `${faviconDir}/favicon-light.svg`,
        transform: (svg) => svg.toString().replace('data-theme="dark"', 'data-theme="light"'),
      },
    ],
  },
  html: {
    template: './src/page.html',
    templateParameters(defaults, { entryName }) {
      const page = pages[entryName as keyof typeof pages]
      return {
        ...defaults,
        page,
        canonical: siteBase + page.path,
        image: `${siteBase}static/social/${page.image}`,
        siteName,
        chart:
          entryName === 'chart/index'
            ? [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'].map((char) => ({
                char,
                code: ALL_MORSE_CODE_MAP[char],
              }))
            : null,
      }
    },
  },
  server: { base: '/morse/', open: !process.env.PLAYWRIGHT_TEST },
})
