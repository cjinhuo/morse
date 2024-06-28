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
        <div className='w-full grow px-40 py-10'>
          <Outlet></Outlet>
        </div>
      </Layout.Content>
      <Layout.Footer>
        <Footer></Footer>
      </Layout.Footer>
    </>
  )
}
export default React.memo(BaseLayout)
