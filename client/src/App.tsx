import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { Login } from './components/login/login.component';
import { ErrorPage } from './pages/error.page';
import { useAuth } from './contexts/AuthContext';
import { DashboardPage } from './pages/dashboard.page';
import { ItemsPage } from './pages/item.page';
import { SalesPage } from './pages/sale.page';
import { UsersPage } from './pages/users.page';
import { CategoriesPage } from './pages/categories.page';
import { PrivateRoute } from './pages/PrivateRoute';
import { AboutPage } from './pages/about.page';
export function App() {
  const { me,  loading } = useAuth();
   
  
    if (loading) return null;
  
  return (
    <Routes>
      <Route path="/" element={!me ? <HomePage /> : <DashboardPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
       <Route path="*" element={<ErrorPage />} />
       <Route
        path="/items"
        element={
          <PrivateRoute>
            <ItemsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/sales"
        element={
          <PrivateRoute>
            <SalesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <UsersPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/categories"
        element={
          <PrivateRoute>
            <CategoriesPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
