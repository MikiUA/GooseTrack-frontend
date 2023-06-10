import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { CalendarRoute } from './CalendarRoute';
import ThemeTestPage from 'components/MUIThemeProvider/ThemeTestPage';

const MainLayout = lazy(() => import('../MainLayout/MainLayout'));
const AccountPage = lazy(() => import('../../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() =>
  import('../../pages/CalendarPage/CalendarPage')
);
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

export const Router = () => {
  return (
    <BrowserRouter basename="GooseTrack-frontend">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/themeTest" element={<ThemeTestPage />} />
          {/* Приватні маршрути */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<CalendarRoute />} />
              <Route path="/calendar" element={<CalendarRoute />} />
              <Route
                path="/calendar/month/:currentDate"
                element={<CalendarPage variant="month" />}
              />
              <Route
                path="/calendar/day/:currentDate"
                element={<CalendarPage variant="day" />}
              />
              {/* Аккаунт */}
              <Route path="account" element={<AccountPage />} />
            </Route>
          </Route>

          {/* Публічні маршрути */}
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
