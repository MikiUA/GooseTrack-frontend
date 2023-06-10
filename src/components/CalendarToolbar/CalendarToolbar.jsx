import React, { useEffect, useState } from 'react';
import PeriodPaginator from './components/PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from './components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper } from './CalendarToolbar.styled';
import { useLocation, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

export default function CalendarToolbar({ typePeriod }) {
  const [type, setType] = useState(typePeriod);
  const location = useLocation();
  const { currentDate } = useParams();

  const isDay = location.pathname.includes('day');

  useEffect(() => {
    if (isDay) {
      setType('day');
      return;
    }
    setType('month');
  }, [isDay]);

  const changeActiveDay = value => {
    if (isDay) {
      const newDate = dayjs(currentDate).add(value, 'day').format('YYYY-MM-DD');
      return `/calendar/day/${newDate}`;
    }
    const newDate = dayjs(currentDate).add(value, 'month').format('YYYY-MM-DD');
    return `/calendar/month/${newDate}`;
  };

  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator
        isDay={isDay}
        typePeriod={type}
        changeActiveDay={changeActiveDay}
      />
      <PeriodTypeSelect onChangeType={setType} />
    </CalendarToolbarWrapper>
  );
}
