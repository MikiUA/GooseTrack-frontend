import { Navigate } from 'react-router-dom';

import dayjs from 'dayjs';

const currentDate = dayjs();

const monthForLink = currentDate.format('YYYY-MM-DD');

export const CalendarRoute = () => {
  return <Navigate to={`/calendar/month/${monthForLink}`} replace />;
};
