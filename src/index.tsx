import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

const container = document.getElementById('root')
if (container) ReactDOM.createRoot(container).render(<RouterProvider router={router} />)
