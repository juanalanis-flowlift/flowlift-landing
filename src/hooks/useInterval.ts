import { useEffect, useRef } from 'react'

// setInterval con limpieza. `enabled=false` lo detiene; cambiar `resetKey` lo reinicia.
export function useInterval(fn: () => void, ms: number, enabled: boolean, resetKey: unknown = 0) {
  const saved = useRef(fn)
  saved.current = fn
  useEffect(() => {
    if (!enabled) return
    const id = window.setInterval(() => saved.current(), ms)
    return () => window.clearInterval(id)
  }, [ms, enabled, resetKey])
}
