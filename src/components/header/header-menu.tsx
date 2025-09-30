import { Tooltip } from '@douyinfe/semi-ui'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { CONVERTER_PATH, LATIN_PATH } from '../../router/router'
import { IconParkNames } from '../../shared/constants'
import LinkWithIcon from '../link-with-icon'

const HeaderMenuContainer = styled.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`

const HeaderMenu = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <HeaderMenuContainer>
      <Tooltip content='Morse Code Converter'>
        <div className='flex items-center'>
          <LinkWithIcon
            name={IconParkNames.switch}
            value={CONVERTER_PATH}
            type='route'
            active={location.pathname === CONVERTER_PATH}
          />
        </div>
      </Tooltip>
      <Tooltip content='Latin Type'>
        <div className='flex items-center'>
          <LinkWithIcon
            name={IconParkNames['keyboard-2']}
            value={LATIN_PATH}
            type='route'
            active={location.pathname === LATIN_PATH}
          />
        </div>
      </Tooltip>
    </HeaderMenuContainer>
  )
}

export default HeaderMenu
