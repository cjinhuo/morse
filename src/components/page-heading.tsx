import { useEffect } from 'react'
import useMobile from '../hooks/useMobile'

export default function PageHeading({
  title,
  description,
  eyebrow,
  mobileTitle = title,
  mobileDescription = description,
}: {
  title: string
  description: string
  eyebrow: string
  mobileTitle?: string
  mobileDescription?: string
}) {
  const mobile = useMobile()
  useEffect(() => {
    document.title = `${title} | MorseType`
  }, [title])
  return (
    <div className='page-heading'>
      {mobile && <span className='meta mobile-eyebrow'>{eyebrow}</span>}
      <h1>{mobile ? mobileTitle : title}</h1>
      <p>{mobile ? mobileDescription : description}</p>
    </div>
  )
}
