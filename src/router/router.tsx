import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../components/base-layout/base-layout'
const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    // errorElement: <ErrorPage />,
  },
  // {
  //   path: 'contacts/:contactId',
  //   element: <Contact />,
  // },
])

export default router
