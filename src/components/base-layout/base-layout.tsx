import './base-layout.css'
import Header from '../header/header'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'
import React from 'react'
import { Layout } from '@douyinfe/semi-ui'
import styled from 'styled-components'

const ContentContainer = styled.div`
  padding: 5vh 8vw;
`
function BaseLayout() {
  return (
    <>
      <Layout.Header>
        <Header></Header>
      </Layout.Header>
      <Layout.Content>
        <ContentContainer className='w-full grow'>
          <Outlet></Outlet>
        </ContentContainer>
      </Layout.Content>
      <Layout.Footer>
        <Footer></Footer>
      </Layout.Footer>
    </>
  )
}
export default React.memo(BaseLayout)
