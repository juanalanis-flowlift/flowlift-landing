import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { langOf, type Lang } from './routes'

const Ctx = createContext<Lang>('es')

const STORAGE_KEY = 'flowlift-language' // la misma llave que usa el sitio actual

// El idioma sale de la URL (/en/... = inglés). Se recuerda la última elección.
export function LangProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const lang = langOf(pathname)
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'es-MX'
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* sin almacenamiento: no pasa nada */ }
  }, [lang])
  return <Ctx.Provider value={lang}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)

export function storedLang(): Lang | null {
  try { const v = localStorage.getItem(STORAGE_KEY); return v === 'en' || v === 'es' ? v : null } catch { return null }
}
