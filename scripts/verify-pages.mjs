import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const base = 'https://cjinhuo.github.io/morse/'
const pages = [
  ['', '摩尔斯电码在线练习', '... --- ...'],
  ['converter/', '文字转摩尔斯电码转换器', '.... .. / .....'],
  ['latin/', '英文打字练习与速度测试', 'WPM'],
  ['chart/', '摩尔斯电码对照表', 'International Morse code'],
]
const get = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8')
const sitemap = await get('sitemap.xml')
assert.deepEqual(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url).sort(),
  pages.map(([path]) => base + path).sort()
)
const titles = new Set()
for (const [path, heading, sample] of pages) {
  const html = await get(`${path}index.html`)
  assert.ok(html.includes('<html lang="zh-CN"'), path)
  assert.ok(html.includes('<section lang="en">'), path)
  assert.ok(html.includes(`rel="canonical" href="${base}${path}"`), path)
  assert.ok(html.includes(`property="og:url" content="${base}${path}"`), path)
  assert.ok(html.includes(`<h1>${heading}`), path)
  assert.ok(html.includes(sample), path)
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]
  assert.ok(title && !titles.has(title), path)
  titles.add(title)
  const image = html.match(/property="og:image" content="([^"]+)"/)?.[1]
  assert.ok(image?.startsWith(`${base}static/social/`), path)
  assert.ok((await readFile(new URL(`../dist/${image.slice(base.length)}`, import.meta.url))).length > 0, path)
  for (const [target] of pages) assert.ok(html.includes(`href="/morse/${target}"`), `${path} -> ${target}`)
}
const chart = await get('chart/index.html')
const rows = [...chart.matchAll(/<th scope="row">([A-Z0-9])<\/th><td><code>([.-]+)<\/code><\/td>/g)]
assert.equal(rows.map(([, char]) => char).join(''), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
const codes = Object.fromEntries(rows.map(([, char, code]) => [char, code]))
assert.deepEqual([codes.S, codes.O, codes['5']], ['...', '---', '.....'])
console.log('All four static pages, local social images, sitemap and 36 Morse chart rows verified.')
