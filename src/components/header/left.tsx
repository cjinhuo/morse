import React from 'react'
import Logo from './logo'
import LinkWithIcon from '../link-with-icon'
import { IconParkNames } from '../../shared/constants'
import styled from 'styled-components'

const HeaderMenuContainer = styled.div`
  display: flex;
  > div {
    margin-left: 1rem;
  }
`

const HeaderMenu = () => {
  return (
    <HeaderMenuContainer>
      <LinkWithIcon name={IconParkNames.keyboard} value='/latin' type='route'></LinkWithIcon>
      <LinkWithIcon name={IconParkNames.setting}></LinkWithIcon>
      <LinkWithIcon name={IconParkNames.info}></LinkWithIcon>
    </HeaderMenuContainer>
  )
}
export default function HeaderLeft() {
  return (
    <div className='h-full flex justify-start'>
      <Logo />
      <HeaderMenu></HeaderMenu>
    </div>
  )
}
