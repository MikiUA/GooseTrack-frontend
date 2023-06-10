import React from 'react';
import PeriodPaginator from './components/PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from './components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper } from './CalendarToolbar.styled';


export default function CalendarToolbar({ typePeriod }) {

  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator
        isDay={typePeriod === 'day'}
      />
      <PeriodTypeSelect isDay={typePeriod === 'day'} />
    </CalendarToolbarWrapper>
  );
}
