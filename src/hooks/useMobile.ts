import { useSyncExternalStore } from 'react'

const phone = window.matchMedia('(max-width: 767px)')
function subscribe(change: () => void) {
  phone.addEventListener('change', change)
  return () => phone.removeEventListener('change', change)
}
export default function useMobile() {
  return useSyncExternalStore(subscribe, () => phone.matches)
}
