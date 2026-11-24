import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

const faviconDir = 'static/icons'

const pages = {
  index: {
    path: '',
    title: 'Morse Code Typing Practice',
    description:
      'Practice the Morse alphabet with the space bar. Tap for a dot and hold for a dash, then follow the visual and audio feedback as you type each letter.',
    example: 'Try SOS: three dots, three dashes, then three dots.',
    image: 'more_play.png',
  },
  'converter/index': {
    path: 'converter/',
    title: 'Text to Morse Code Converter',
    description:
      'Convert letters, numbers and punctuation to Morse code. See the dots and dashes as a graphic and export your message as PNG or SVG.',
    example: 'Enter SOS to see ... --- ... and customize the line spacing of the graphic.',
    image: 'export_pic.png',
  },
  'latin/index': {
    path: 'latin/',
    title: 'English Typing Practice',
    description: 'Practice English sentences on your keyboard and track typing speed, accuracy and mistakes as you go.',
    example: 'Type the highlighted character, then use the next sentence to start another practice round.',
    image: 'latin_play.png',
  },
}

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: Object.fromEntries(Object.keys(pages).map((name) => [name, './src/index.tsx'])),
  },
  output: {
    distPath: { favicon: faviconDir },
    copy: [
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
      return { ...defaults, page, canonical: `https://cjinhuo.github.io/morse/${page.path}` }
    },
  },
  server: { base: '/morse/', open: !process.env.PLAYWRIGHT_TEST },
})
