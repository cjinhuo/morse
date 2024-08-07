import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../components/base-layout/base-layout'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import LatinType from '../pages/latin-type/latin-type'
const router = createBrowserRouter([
  {
    path: '/morse',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        path: '/morse',
        element: <Home></Home>,
      },
      {
        path: '/morse/about',
        element: <About></About>,
      },
      {
        path: '/morse/latin',
        element: <LatinType></LatinType>,
      },
    ],
  },
])

export default router
