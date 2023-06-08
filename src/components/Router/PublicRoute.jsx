import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from 'API/userSlice';

/**
 * - If the route is public gives acess to login or register page
 */

export const PublicRoute = () => {
  const userInfo = useSelector(getUserInfo);

  return userInfo.name ? <Navigate to="/calendar" replace /> : <Outlet />;
};
