import useMobile from '../hooks/useMobile'
import HeaderMenu from './header/header-menu'

export default function Footer() {
  return useMobile() ? (
    <HeaderMenu mobile />
  ) : (
    <footer className='site-footer'>
      <span className='meta footer-dark'>{'MORSETYPE  /  FIND YOUR FREQUENCY'}</span>
      <span className='meta footer-light'>MORSETYPE / LIGHT</span>
    </footer>
  )
}
