import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from 'hooks';

/**
 * - If the route is private and user is authorized allows to use privat pages
 */

export const PrivateRoute = () => {
  // const { token } = useAuth();
  const token = false;
  return token ? <Outlet /> : <Navigate to="/homepage" replace />;
};
