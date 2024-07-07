import Logo from './logo'
import LinkWithIcon from '../link-with-icon'
import { IconParkNames } from '../../shared/constants'
import styled from 'styled-components'

const HeaderMenuContainer = styled.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2.2rem;
  }
`

const HeaderMenu = () => {
  return (
    <HeaderMenuContainer>
      <LinkWithIcon name={IconParkNames['keyboard-2']} value='/morse/latin' type='route'></LinkWithIcon>
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
