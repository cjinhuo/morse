import './base-layout.css'
import Header from '../header/header'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'
import React from 'react'
import { Layout } from '@douyinfe/semi-ui'

function BaseLayout() {
  return (
    <>
      <Layout.Header>
        <Header></Header>
      </Layout.Header>
      <Layout.Content>
        <Outlet></Outlet>
      </Layout.Content>
      <Layout.Footer>
        <Footer></Footer>
      </Layout.Footer>
    </>
  )
}
export default React.memo(BaseLayout)
