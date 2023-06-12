//CalendarToolbar
//ChoosedDay
//ChoosedMonth
import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay';
import { Container } from './CalendarPage.styled';

const CalendarPage = ({ variant }) => {
  return (
    <Container>
      <CalendarToolbar typePeriod={variant} />
      {variant === 'month' ? <ChoosedMonth /> : <ChoosedDay />}
    </Container>
  );
};

export default CalendarPage;
