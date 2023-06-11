import { Navigate, useLocation, useParams } from 'react-router-dom';

import { lazy, useMemo } from 'react';
const CalendarPage = lazy(() =>
  import('pages/CalendarPage/CalendarPage')
);

function isValidDate(inputDate) {
  const inputFormat = /^\d{4}-\d{2}-\d{2}$/; // Regular expression for 'YYYY-MM-DD' format
  if (inputFormat.test(inputDate)) {
    const parsedDate = new Date(inputDate);
    if (!isNaN(parsedDate)) {
      return true; // Input date is valid
    }
  }

  return false; // Input date is not valid
}

export const CalendarRoute = () => {
  const { currentDate } = useParams();
  const path = useLocation();

  const navigateTo = useMemo(() => {
    if (isValidDate(currentDate)) return null;
    const newCurrentDate = new Date().toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format

    if (path.pathname.includes('/day')) return `/calendar/day/${newCurrentDate}`
    return `/calendar/month/${newCurrentDate}`
  }, [currentDate, path]);

  return navigateTo
    ? <Navigate to={navigateTo} replace />
    : <CalendarPage variant={path.pathname.includes('/day') ? 'day' : 'month'} />
};
