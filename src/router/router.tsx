import { createHashRouter } from 'react-router-dom'
import BaseLayout from '../components/base-layout/base-layout'
import Tree from '../components/flow/tree'
import About from '../pages/about/about'
import Home from '../pages/home/home'
import LatinType from '../pages/latin-type/latin-type'
import MorseConverter from '../pages/morse-converter/morse-converter'

export const MORSE_PATH = '/morse'
export const CONVERTER_PATH = '/morse/converter'
export const LATIN_PATH = '/morse/latin'

const router = createHashRouter([
  {
    path: '/morse',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        path: MORSE_PATH,
        element: <Home />,
      },
      {
        path: `${MORSE_PATH}/about`,
        element: <About />,
      },
      {
        path: LATIN_PATH,
        element: <LatinType />,
      },
      // {
      //   path: '/morse/tree',
      //   element: <Tree />,
      // },
      {
        path: CONVERTER_PATH,
        element: <MorseConverter />,
      },
    ],
  },
])

export default router
