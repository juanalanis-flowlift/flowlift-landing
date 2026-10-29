import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import Citas from './pages/Citas'
import NotFound from './pages/NotFound'

// Muestrario de componentes: solo en desarrollo, se quita al terminar.
const Kit = import.meta.env.DEV ? lazy(() => import('./pages/Kit')) : null

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        {Kit && <Route path="/kit" element={<Suspense fallback={null}><Kit /></Suspense>} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
