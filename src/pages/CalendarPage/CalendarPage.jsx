//CalendarToolbar
//ChoosedDay
//ChoosedMonth
import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';
import { useParams } from 'react-router';

const CalendarPage = ({ variant }) => {
  const { currentDate } = useParams();
  console.log(currentDate);
  return (
    <>
      <h1>CalendarPage</h1>
      {/* CalendarToolBar (currentDate)*/}
      {variant === 'month' ? (
        <>
          <h2>month</h2>
          <ChoosedMonth></ChoosedMonth>
        </>
      ) : (
        <>
          <h2>day</h2>
          {/* ChoosedDay */}
        </>
      )}
    </>
  );
};

export default CalendarPage;
