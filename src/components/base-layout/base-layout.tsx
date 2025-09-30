import './base-layout.css'
import { Layout } from '@douyinfe/semi-ui'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../footer'
import Header from '../header/header'

const ContentContainer = styled.div`
  padding: 5vh 8vw;
`
function BaseLayout() {
  return (
    <>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <ContentContainer className='w-full grow'>
          <Outlet />
        </ContentContainer>
      </Layout.Content>
      <Layout.Footer>{/* <Footer /> */}</Layout.Footer>
    </>
  )
}
export default React.memo(BaseLayout)
