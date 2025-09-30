export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='w-full px-8 h-9 flex items-center justify-center'>
      <span className='text-skin-neutral-5'>
        Copyright © {currentYear}{' '}
        <a
          href='https://github.com/cjinhuo'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-skin-accent transition-colors duration-200'
        >
          cjinhuo
        </a>
        . All rights reserved.
      </span>
    </div>
  )
}
