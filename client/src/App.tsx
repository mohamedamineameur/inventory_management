import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { Login } from './components/login/login.component';
import { ErrorPage } from './pages/error.page';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
       <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
