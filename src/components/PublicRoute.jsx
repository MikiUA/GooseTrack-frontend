import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from 'hooks';

/**
 * - If the route is public gives acess to login or register page
 */

export const PublicRoute = () => {
  //   const { token } = useAuth();
  const token = false;
  return token ? <Navigate to="/" replace /> : <Outlet />;
};
