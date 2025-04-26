import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/shared/header/header.component.tsx'
import {App} from './App.tsx'
import './index.css'
import { Footer } from './components/shared/footer/footer.component.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
