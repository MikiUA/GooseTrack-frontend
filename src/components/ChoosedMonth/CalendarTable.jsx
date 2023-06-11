import moment from 'moment';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CalendarGrid, GridCell, DateWrap, ToDay } from './ChoosedMonth.styled';
import { useAllTaskQuery } from 'API/taskUtils';
import TaskListInBlock from './TaskListInBlock'


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

  return { currentMonth, dayArray, isToday }
}
const tasksObject = (taskArr) => {
  const object = {}
  for (const task in taskArr) {
    const { category, date } = taskArr[task];
    if (category !== "to-do") continue;
    if (!object[date]) object[date] = [];
    object[date].push(taskArr[task]);
  }
  return object;
}
const CalendarTable = () => {
  const { currentDate } = useParams();
  const { data } = useAllTaskQuery(({ startDate: '2010-01-01', endDate: '2030-01-01' }));

  const navigate = useNavigate();
  const { currentMonth, dayArray, isToday } = useMemo(() => updateValues(currentDate), [currentDate]);
  const tasks = useMemo(() => tasksObject(data), [data]);
  const navigateToDate = newDate => {
    const format = newDate.format('YYYY-MM-DD');

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
          <TaskListInBlock taskArr={tasks[calendarDay.format('YYYY-MM-DD')]} />
        </GridCell>
      ))}
    </CalendarGrid>
  );
};
export default CalendarTable;
