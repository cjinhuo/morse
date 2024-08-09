import { useLayoutEffect, useState } from "react"
import { debounceTime, fromEvent } from "rxjs"
import { isMobile } from "../shared/utils"

export default function useMobile() {
  const [isMobileState, setIsMobile] = useState(isMobile())
  useLayoutEffect(() => {
    const subscription = fromEvent(window, 'resize').pipe(debounceTime(500)).subscribe(() => {
      setIsMobile(isMobile())
    })
    return () => {
      subscription.unsubscribe()
    }
  },[])
  return isMobileState
}
