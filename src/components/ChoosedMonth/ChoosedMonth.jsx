// MonthCalendarHead
// CalendarTable
import moment from 'moment';

import CalendarTable from './CalendarTable';
import MonthCalendarHead from './MonthCalendarHead';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const WrapCalendar = styled.div`
  @media screen and (max-width: 374px) {
    max-width: 100%;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`;

const ChoosedMonth = () => {
  //useEffect(() => {
  moment.updateLocale('en', { week: { dow: 1 } });
  const startDay = moment().startOf('month').startOf('week').clone();
  //}, []);

  return (
    <WrapCalendar>
      <MonthCalendarHead />
      <CalendarTable startDay={startDay} />
    </WrapCalendar>
  );
};

export default ChoosedMonth;
