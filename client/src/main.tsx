import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/shared/header/header.component.tsx'
import { Login } from './components/login/login.component.tsx'
import './index.css'
import { Footer } from './components/shared/footer/footer.component.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Login />
    <Footer />
  </StrictMode>,
)
