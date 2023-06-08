import React from 'react';
import PeriodPaginator from './components/PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from './components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper } from './CalendarToolbar.styled';

export default function CalendarToolbar() {
  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator />
      <PeriodTypeSelect />
    </CalendarToolbarWrapper>
  );
}
