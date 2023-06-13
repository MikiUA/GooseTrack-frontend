// MonthCalendarHead
// CalendarTable
import moment from 'moment';

import CalendarTable from './CalendarTable';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import { StyledWrapCalendar } from './ChoosedMonth.styled';

moment.updateLocale('en', { week: { dow: 1 } });


const ChoosedMonth = () => {

  return (
    <StyledWrapCalendar>
      <MonthCalendarHead />
      <CalendarTable />
    </StyledWrapCalendar>
  );
};

export default ChoosedMonth;
