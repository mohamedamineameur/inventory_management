import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { JSX } from 'react';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { me, loading } = useAuth();

  if (loading) return null;

  return me ? children : <Navigate to="/" replace />;
}
