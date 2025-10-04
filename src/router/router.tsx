import { createHashRouter } from 'react-router-dom'
import BaseLayout from '../components/base-layout/base-layout'
import Tree from '../components/flow/tree'
import About from '../pages/about/about'
import Home from '../pages/home/home'
import LatinType from '../pages/latin-type/latin-type'
import MorseConverter from '../pages/morse-converter/morse-converter'

export const MORSE_PATH = '/'
export const ABOUT_PATH = `${MORSE_PATH}about`
export const CONVERTER_PATH = `${MORSE_PATH}converter`
export const LATIN_PATH = `${MORSE_PATH}latin`

const router = createHashRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ABOUT_PATH,
        element: <About />,
      },
      {
        path: LATIN_PATH,
        element: <LatinType />,
      },
      // {
      //   path: 'tree',
      //   element: <Tree />,
      // },
      {
        path: 'converter',
        element: <MorseConverter />,
      },
    ],
  },
], {
  basename: '/'
})

export default router
