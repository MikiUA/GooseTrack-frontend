import moment from 'moment';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CalendarGrid, GridCell, DateWrap, ToDay } from './ChoosedMonth.styled';


const updateValues = (currentDate) => {
  const today = moment(currentDate).hours(0).minutes(0).seconds(0).milliseconds(0);
  const currentMonth = today.format('M');
  const startDay = moment(currentDate).startOf('month').startOf('week');
  const day = startDay.subtract(1, 'day');
  const totalDays = 42;
  const dayArray = [...Array(totalDays)].map(() =>
    day.add(1, 'day').clone()
  );
  const isToday = (calendarDay) => today.isSame(calendarDay);
  console.log({ today, startDay, currentMonth })
  return { currentMonth, dayArray, isToday }
}
const CalendarTable = () => {
  const { currentDate } = useParams();
  const navigate = useNavigate();
  const { currentMonth, dayArray, isToday } = useMemo(() => updateValues(currentDate), [currentDate]);

  //console.log(moment().format('dddd'));
  const navigateToDate = newDate => {
    const format = newDate.format('YYYY-MM-DD');
    console.log(isToday(newDate));
    if (isToday(newDate)) navigate(`/calendar/day/${format}`);
    else navigate(`/calendar/month/${format}`);
    // navigate(format);
  };

  return (
    <CalendarGrid>
      {dayArray.map((calendarDay, idx) => (
        <GridCell onClick={() => navigateToDate(calendarDay)}
          key={idx + 'cell'}
          isNotCurrMonth={
            calendarDay.format('M') !== currentMonth ? true : false
          }
        >
          {isToday(calendarDay)
            ? <ToDay>{calendarDay.format('D')}</ToDay>
            : <DateWrap>{calendarDay.format('D')}</DateWrap>
          }
        </GridCell>
      ))}
    </CalendarGrid>
  );
};
export default CalendarTable;
