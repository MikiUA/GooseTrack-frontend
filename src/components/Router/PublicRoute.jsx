import { Navigate, Outlet } from 'react-router-dom';

/**
 * - If the route is public gives acess to login or register page
 */

export const PublicRoute = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  return token ? <Navigate to="/" replace /> : <Outlet />;
};
