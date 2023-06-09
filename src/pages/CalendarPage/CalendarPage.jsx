//CalendarToolbar
//ChoosedDay
//ChoosedMonth
import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
// import ChoosedDay from "components/ChoosedDay/ChoosedDay";

const CalendarPage = ({ variant }) => {
  return (
    <>
      <CalendarToolbar />
      {variant === 'month' ? <ChoosedMonth /> : <>{/* <ChoosedDay/> */}</>}
    </>
  );
};

export default CalendarPage;
