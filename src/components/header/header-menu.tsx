import { Tooltip } from '@douyinfe/semi-ui'
import LinkWithIcon from '../link-with-icon'
import { IconParkNames } from '../../shared/constants'
import styled from 'styled-components'

const HeaderMenuContainer = styled.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`

const HeaderMenu = () => {
  return (
    <HeaderMenuContainer>
      <Tooltip content='Morse Code Converter'>
        <div className='flex items-center'>
          <LinkWithIcon name={IconParkNames.switch} value='/morse/converter' type='route' />
        </div>
      </Tooltip>
      <Tooltip content='Latin Type'>
        <div className='flex items-center'> 
        <LinkWithIcon name={IconParkNames['keyboard-2']} value='/morse/latin' type='route' />
        </div>
      </Tooltip>
    </HeaderMenuContainer>
  )
}

export default HeaderMenu