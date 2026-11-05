import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App, { preloadRoute } from './App'
import './styles/tokens.css'
import './styles/tokens-editorial.css'
import './styles/global.css'
import './styles/motion.css'

// Primero la página de la URL actual, luego el render (ver preloadRoute en App.tsx).
preloadRoute(location.pathname).finally(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
})
