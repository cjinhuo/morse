import Header from '../header/header'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'
import React from 'react'
import './base-layout.css'

function BaseLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
export default React.memo(BaseLayout)
