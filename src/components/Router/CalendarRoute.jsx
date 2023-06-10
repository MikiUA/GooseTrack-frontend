import { Navigate, useLocation, useParams } from 'react-router-dom';

import { lazy, useMemo } from 'react';
const CalendarPage = lazy(() =>
  import('pages/CalendarPage/CalendarPage')
);

function isValidDate(inputDate) {
  const inputFormat = /^\d{4}-\d{2}-\d{2}$/; // Regular expression for 'YYYY-MM-DD' format
  return (inputFormat.test(inputDate));
}

function validateDate(inputDate) {
  const inputFormat = /^\d{4}-\d{2}-\d{2}$/; // Regular expression for 'YYYY-MM-DD' format
  const currentDate = new Date().toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format
  if (inputFormat.test(inputDate)) {
    const parsedDate = new Date(inputDate);
    if (!isNaN(parsedDate)) {
      return inputDate; // Input date is valid, so return it
    }
  }

  return currentDate; // Input date is not valid, so return the current date
}

export const CalendarRoute = () => {
  const { currentDate } = useParams();
  const path = useLocation();
  const navigateTo = useMemo(() => {
    if (isValidDate(currentDate)) return null;
    const validDate = validateDate(currentDate);
    if (path.pathname.includes('/day')) return `/calendar/day/${validateDate(validDate)}`
    return `/calendar/month/${validDate}`
  }, [currentDate, path]);
  // return <CalendarPage />
  return navigateTo
    ? <Navigate to={navigateTo} replace />
    : <CalendarPage variant={path.pathname.includes('/day') ? 'day' : 'month'} />

};
