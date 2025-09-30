import { createHashRouter } from 'react-router-dom'
import BaseLayout from '../components/base-layout/base-layout'
import Tree from '../components/flow/tree'
import About from '../pages/about/about'
import Home from '../pages/home/home'
import LatinType from '../pages/latin-type/latin-type'
import MorseConverter from '../pages/morse-converter/morse-converter'
const router = createHashRouter([
  {
    path: '/morse',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        path: '/morse',
        element: <Home />,
      },
      {
        path: '/morse/about',
        element: <About />,
      },
      {
        path: '/morse/latin',
        element: <LatinType />,
      },
      {
        path: '/morse/tree',
        element: <Tree />,
      },
      {
        path: '/morse/converter',
        element: <MorseConverter />,
      },
    ],
  },
])

export default router
