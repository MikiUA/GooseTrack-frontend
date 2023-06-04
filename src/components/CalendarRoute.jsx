import { Navigate } from 'react-router-dom';

const currentDate = new Date();

const options = { month: 'long' };
const currentMonth = currentDate.toLocaleString('en-US', options);
const currentYear = currentDate.getFullYear();

const monthForLink = currentMonth + currentYear;

export const CalendarRoute = () => {
  return <Navigate to={`/calendar/month/${monthForLink}`} replace />;
};
