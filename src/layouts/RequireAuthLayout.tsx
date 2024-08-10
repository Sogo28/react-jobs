import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useAuthStore } from '../state/AuthStore';

export default function RequireAuthLayout() {
  // Destcruturing elements from zustand store will lead to rerenders if something in the store is changed, even if you don't destructure it. Better to do it like: 
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  return (
    token
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  )
}