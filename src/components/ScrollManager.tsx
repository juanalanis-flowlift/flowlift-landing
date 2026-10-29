import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Al cambiar de ruta sube al inicio; si hay #ancla, baja a ella.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}
