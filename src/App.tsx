import { lazy, Suspense, type ComponentType } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import { LangProvider } from './i18n/LangContext'
import { PAGES, REDIRECTS, pageOf, type PageKey } from './i18n/routes'

type Loader = () => Promise<{ default: ComponentType }>

// Cada página (menos la Home) es su propio archivo: solo se descarga cuando se visita.
const LOADERS: Partial<Record<PageKey, Loader>> = {
  citas: () => import('./pages/Citas'),
  funciones: () => import('./pages/Funciones'),
  precios: () => import('./pages/Precios'),
  faq: () => import('./pages/Preguntas'),
  ayuda: () => import('./pages/Ayuda'),
  nosotros: () => import('./pages/Nosotros'),
  privacidad: () => import('./pages/Privacidad'),
  terminos: () => import('./pages/Terminos'),
}
const NOT_FOUND: Loader = () => import('./pages/NotFound')

const loaded = new Map<string, ComponentType>()
const lazies = new Map<string, ComponentType>()

// Descarga la página de la URL actual antes del primer render: así React pinta la página completa de una vez,
// en lugar de vaciar el HTML prerenderizado mientras llega el archivo (eso movía todo el layout).
export async function preloadRoute(pathname: string) {
  const key = pageOf(pathname)
  const id = key && LOADERS[key] ? key : key === 'home' ? '' : pathname in REDIRECTS ? '' : 'notfound'
  if (!id || loaded.has(id)) return
  loaded.set(id, (await (id === 'notfound' ? NOT_FOUND : LOADERS[id as PageKey]!)()).default)
}

function Lazy({ id }: { id: string }) {
  let C = loaded.get(id)
  if (!C) {
    if (!lazies.has(id)) lazies.set(id, lazy(id === 'notfound' ? NOT_FOUND : LOADERS[id as PageKey]!))
    C = lazies.get(id)!
  }
  return <C />
}

export default function App() {
  return (
    <LangProvider>
      <ScrollManager />
      <Suspense fallback={null}>
        <Routes>
          <Route path={PAGES.home.es} element={<Home />} />
          <Route path={PAGES.home.en} element={<Home />} />
          {(Object.keys(LOADERS) as PageKey[]).flatMap((k) => [
            <Route key={k + 'es'} path={PAGES[k].es} element={<Lazy id={k} />} />,
            <Route key={k + 'en'} path={PAGES[k].en} element={<Lazy id={k} />} />,
          ])}
          {Object.entries(REDIRECTS).map(([from, to]) => <Route key={from} path={from} element={<Navigate to={to} replace />} />)}
          <Route path="*" element={<Lazy id="notfound" />} />
        </Routes>
      </Suspense>
    </LangProvider>
  )
}
