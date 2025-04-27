import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/shared/header/header.component.tsx'
import {App} from './App.tsx'
import './index.css'
import { Footer } from './components/shared/footer/footer.component.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> 
        <Header />
        <App />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
