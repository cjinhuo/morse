import Header from '../header'
import Home from '../../pages/home/home'
import Footer from '../footer'
import React from 'react'

function BaseLayout() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}
export default React.memo(BaseLayout)
