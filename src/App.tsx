import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import { LangProvider } from './i18n/LangContext'
import { PAGES, REDIRECTS, type PageKey } from './i18n/routes'

// Las demás páginas se cargan solo cuando se visitan (la Home no descarga su código)
const Citas = lazy(() => import('./pages/Citas'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PAGE_COMPONENTS: Partial<Record<PageKey, React.LazyExoticComponent<() => JSX.Element>>> = { citas: Citas }

export default function App() {
  return (
    <LangProvider>
      <ScrollManager />
      <Suspense fallback={null}>
        <Routes>
          <Route path={PAGES.home.es} element={<Home />} />
          <Route path={PAGES.home.en} element={<Home />} />
          {(Object.keys(PAGE_COMPONENTS) as PageKey[]).flatMap((k) => {
            const C = PAGE_COMPONENTS[k]!
            return [<Route key={k + 'es'} path={PAGES[k].es} element={<C />} />, <Route key={k + 'en'} path={PAGES[k].en} element={<C />} />]
          })}
          {Object.entries(REDIRECTS).map(([from, to]) => <Route key={from} path={from} element={<Navigate to={to} replace />} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </LangProvider>
  )
}
