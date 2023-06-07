import { Navigate, Outlet } from 'react-router-dom';

/**
 * - If the route is private and user is authorized allows to use privat pages
 */

export const PrivateRoute = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  console.log('token =', token);

  return token ? <Outlet /> : <Navigate to="/" replace />;
};
