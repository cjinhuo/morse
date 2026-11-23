import './base-layout.css'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Header from '../header/header'

export default function BaseLayout() {
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
