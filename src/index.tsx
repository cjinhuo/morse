import '@douyinfe/semi-ui/react19-adapter'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

const html = document.documentElement
if (window.matchMedia?.('(prefers-color-scheme: dark)').matches || localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark')
}
function resizeText() {
  html.style.fontSize = `${Math.min(html.getBoundingClientRect().width / 30, 18)}px`
}
window.addEventListener('resize', resizeText)
resizeText()

const rootEl = document.getElementById('root')

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(<RouterProvider router={router}></RouterProvider>)
}
