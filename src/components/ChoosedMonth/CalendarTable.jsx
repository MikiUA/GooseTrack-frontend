import moment from 'moment';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CalendarGrid, GridCell, DateBtn } from './ChoosedMonth.styled';
import { useAllTaskQuery } from 'API/taskUtils';
import TaskList from './TaskList/TaskList';

const updateValues = currentDate => {
  const today = moment(currentDate)
    .hours(0)
    .minutes(0)
    .seconds(0)
    .milliseconds(0);

  const currentMonth = today.format('M');
  const startDay = moment(currentDate).startOf('month').startOf('week');

  const day = startDay.subtract(1, 'day');
  const totalDays = 42;
  const dayArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const isToday = calendarDay =>
    today.isSame(calendarDay) & today.isSame(moment().format('YYYY-MM-DD'));

  return { currentMonth, dayArray, isToday };
};
const tasksObject = taskArr => {
  const object = {};
  for (const task in taskArr) {
    const { category, date } = taskArr[task];
    if (category !== 'to-do') continue;
    if (!object[date]) object[date] = [];
    object[date].push(taskArr[task]);
  }
  return object;
};
const getStartEndDates = currentDate => {
  const startDate = moment(currentDate)
    .startOf('month')
    .startOf('week')
    .format('YYYY-MM-DD');
  const endDate = moment(currentDate)
    .endOf('month')
    .endOf('week')
    .format('YYYY-MM-DD');
  return { startDate, endDate };
};
const CalendarTable = () => {
  const { currentDate } = useParams();
  const { data } = useAllTaskQuery(getStartEndDates(currentDate));

  const navigate = useNavigate();
  const { currentMonth, dayArray, isToday } = useMemo(
    () => updateValues(currentDate),
    [currentDate]
  );
  const tasks = useMemo(() => tasksObject(data), [data]);
  const navigateToDate = newDate => {
    const format = newDate.format('YYYY-MM-DD');
    navigate(`/calendar/day/${format}`);
    // navigate(format);
  };

  return (
    <CalendarGrid>
      {dayArray.map((calendarDay, idx) => (
        <GridCell
          onClick={() => navigateToDate(calendarDay)}
          key={idx + 'cell'}
          isNotCurrMonth={
            calendarDay.format('M') !== currentMonth ? true : false
          }
        >
          <DateBtn variant={isToday(calendarDay) ? 'contained' : 'text'}>
            {calendarDay.format('D')}
          </DateBtn>
          <TaskList taskArr={tasks[calendarDay.format('YYYY-MM-DD')]} />
        </GridCell>
      ))}
    </CalendarGrid>
  );
};
export default CalendarTable;
