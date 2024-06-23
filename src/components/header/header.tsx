import styled from 'styled-components'
import HeaderLeft from './left'
import HeaderRight from './right'

const HeaderContainer = styled.div``
export default function Header() {
  return (
    <HeaderContainer className='w-full flex items-center justify-between px-10 h-9'>
      <HeaderLeft />
      <HeaderRight />
    </HeaderContainer>
  )
}
