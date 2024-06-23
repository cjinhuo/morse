import { useEffect, useRef } from 'react'
import PureTypeChar, { type RefMethodsType } from '../../components/pure-type-char'
import { fromEvent } from 'rxjs'

export default function LatinType() {
  const pureTypeCharRef = useRef<RefMethodsType | null>(null)

  useEffect(() => {
    if (!pureTypeCharRef.current) return
    fromEvent(document, 'keydown').subscribe((e) => {
      // todo 过滤特殊按键，如 shift 大小写 tab 键等等
    })
  }, [])

  return (
    <div>
      <PureTypeChar data='HELLO' ref={pureTypeCharRef}></PureTypeChar>
    </div>
  )
}
