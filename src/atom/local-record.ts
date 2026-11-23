import { atomWithStorage } from 'jotai/utils'

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function localRecord<T>(key: string, fallback: T, valid: (data: unknown) => data is T) {
  let cached = fallback
  let lastStoredJSON: string | null = null
  const subscribers = new Set<(value: T) => void>()

  function read(): T {
    let raw: string | null
    try {
      raw = localStorage.getItem(key)
    } catch {
      return cached
    }
    if (raw !== lastStoredJSON) {
      lastStoredJSON = raw
      try {
        const value: unknown = raw === null ? null : JSON.parse(raw)
        cached = valid(value) ? value : fallback
      } catch {
        cached = fallback
      }
    }
    return cached
  }

  function write(value: T, json: string | null) {
    cached = value
    try {
      if (json === null) localStorage.removeItem(key)
      else localStorage.setItem(key, json)
      lastStoredJSON = json
    } catch {
      // Keep the edit in memory until storage actually changes, here or in another tab.
    }
  }

  function refresh() {
    const value = read()
    for (const update of subscribers) update(value)
  }
  function onStorage(event: StorageEvent) {
    if (event.key === key || event.key === null) refresh()
  }
  function onVisibility() {
    if (!document.hidden) refresh()
  }

  const storage = {
    getItem: read,
    setItem: (_key: string, value: T) => write(value, JSON.stringify(value)),
    removeItem: () => write(fallback, null),
    subscribe(_key: string, update: (value: T) => void) {
      if (!subscribers.size) {
        window.addEventListener('storage', onStorage)
        window.addEventListener('pageshow', refresh)
        document.addEventListener('visibilitychange', onVisibility)
      }
      subscribers.add(update)
      return () => {
        subscribers.delete(update)
        if (subscribers.size) return
        window.removeEventListener('storage', onStorage)
        window.removeEventListener('pageshow', refresh)
        document.removeEventListener('visibilitychange', onVisibility)
      }
    },
  }

  // Each route entry reads synchronously, including edits made while it was unmounted.
  return { read, refresh, createAtom: () => atomWithStorage(key, fallback, storage, { getOnInit: true }) }
}
