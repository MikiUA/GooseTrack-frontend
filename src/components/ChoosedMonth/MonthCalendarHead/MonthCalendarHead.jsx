import { DivCalendarHead,CalendarHeaderCell } from "./MonthCalendarHead.styled";

const daysName = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

const MonthCalendarHead = () => {

  return (
    <DivCalendarHead>
      {daysName.map((day, idx) => (
        <CalendarHeaderCell key={idx} isWeekDay={idx < 5 ? true : false}>
          {day}
        </CalendarHeaderCell>
      ))}
    </DivCalendarHead>
  );
};

export default MonthCalendarHead;
