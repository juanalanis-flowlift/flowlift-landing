import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager'

import Home from './pages/Home'

// /citas y la 404 se cargan solo cuando se visitan (la Home no descarga su código)
const Citas = lazy(() => import('./pages/Citas'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Suspense fallback={null}><Citas /></Suspense>} />
        <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
      </Routes>
    </>
  )
}
