import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
  },
  output: {
    assetPrefix: '/morse/',
  },
  server: {
    open: 'morse/#/',
  },
})
