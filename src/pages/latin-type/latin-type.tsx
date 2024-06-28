import { useEffect, useRef } from 'react'
import PureTypeChar, { type RefMethodsType } from '../../components/pure-type-char'
import { fromEvent } from 'rxjs'

export default function LatinType() {
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)

  useEffect(() => {
    if (!pureTypeCharRef.current) return
    fromEvent(document, 'keydown').subscribe((e) => {})
  }, [])

  return (
    <div>
      <PureTypeChar data='hello world!' ref={pureTypeCharRef}></PureTypeChar>
    </div>
  )
}
