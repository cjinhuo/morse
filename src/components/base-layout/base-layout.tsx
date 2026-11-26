import './base-layout.css'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { pages, siteBase, siteName } from '../../shared/page-meta'
import { languageAtom } from '../../shared/preferences'
import Footer from '../footer'
import Header from '../header/header'

export default function BaseLayout() {
  const { pathname } = useLocation()
  const language = useAtomValue(languageAtom)
  useEffect(() => {
    const path = pathname.replace(/^\/+|\/+$/g, '')
    const page = Object.values(pages).find((candidate) => candidate.path.replace(/\/$/, '') === path)
    if (!page) return
    const english = language === 'en'
    const title = `${english ? page.englishTitle : page.title} | ${siteName}`
    const description = english ? page.englishDescription : page.description
    const url = siteBase + page.path
    const image = `${siteBase}static/social/${page.image}`
    document.documentElement.lang = english ? 'en' : 'zh-CN'
    document.title = title
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    for (const [selector, content] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:url"]', url],
      ['meta[property="og:locale"]', english ? 'en_US' : 'zh_CN'],
      ['meta[property="og:image"]', image],
      ['meta[property="og:image:alt"]', title],
    ]) {
      document.querySelector(selector)?.setAttribute('content', content)
    }
  }, [language, pathname])
  return (
    <>
      <Header />
      <main id='workspace'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
