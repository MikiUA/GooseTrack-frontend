import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getUserInfo } from 'API/userSlice';

/**
 * - If the route is private and user is authorized allows to use privat pages
 */

export const PrivateRoute = () => {
  const userInfo = useSelector(getUserInfo);
  console.log({userInfo});

  return userInfo.name ? <Outlet /> : <Navigate to="/" replace />;
};
