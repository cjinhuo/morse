import { createHashRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import BaseLayout from '../components/base-layout/base-layout'

// 动态引入组件
const Tree = lazy(() => import('../components/flow/tree'))
const Home = lazy(() => import('../pages/home/home'))
const LatinType = lazy(() => import('../pages/latin-type/latin-type'))
const MorseConverter = lazy(() => import('../pages/morse-converter/morse-converter'))

export const MORSE_PATH = '/'
export const ABOUT_PATH = `${MORSE_PATH}about`
export const CONVERTER_PATH = `${MORSE_PATH}converter`
export const LATIN_PATH = `${MORSE_PATH}latin`

// 加载状态组件
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
)

const router = createHashRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: LATIN_PATH,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LatinType />
          </Suspense>
        ),
      },
      // {
      //   path: 'tree',
      //   element: (
      //     <Suspense fallback={<LoadingFallback />}>
      //       <Tree />
      //     </Suspense>
      //   ),
      // },
      {
        path: 'converter',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MorseConverter />
          </Suspense>
        ),
      },
    ],
  },
], {
  basename: '/'
})

export default router
