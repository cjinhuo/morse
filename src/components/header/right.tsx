import { IconParkNames } from '../../shared/constants'
import LinkWithIcon from '../link-with-icon'
import Theme from './theme'

export default function HeaderRight() {
  return (
    <div className='h-full flex'>
      {/* 建一个 typing 仓库 */}
      <LinkWithIcon
        name={IconParkNames.github}
        value='https://github.com/cjinhuo/cjinhuo.github.io'
        type='link'></LinkWithIcon>

      <Theme />
    </div>
  )
}
