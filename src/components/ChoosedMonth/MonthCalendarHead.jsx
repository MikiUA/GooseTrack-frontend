import styled from 'styled-components';

const DivCalendarHead = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-bottom: 14px;
  padding: 18px;
  background-color: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 14px 40px;
    border: 1px solid rgba(220, 227, 229, 0.8);
  }
  @media screen and (min-width: 1440px) {
    padding: 14px 60px;
  }
`;

const CalendarHeaderCell = styled.div`
  color: ${props => (props.isWeekDay ? '#3E85F3;' : '#343434')};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0;
  line-height: 1.12;

  text-transform: uppercase;
  overflow: hidden;
  &:not(:last-child) {
    margin-right: 34px;
  }
  &:first-letter {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    &:not(:last-child) {
      margin-right: 62px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-right: 122px;
    }
  }
`;

const MonthCalendarHead = () => {
  const daysName = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'san'];

  return (
    <DivCalendarHead>
      {daysName.map((day, idx) => (
        <CalendarHeaderCell key={idx} isWeekDay={idx >= 5 ? true : false}>
          {day}
        </CalendarHeaderCell>
      ))}
    </DivCalendarHead>
  );
};

export default MonthCalendarHead;
