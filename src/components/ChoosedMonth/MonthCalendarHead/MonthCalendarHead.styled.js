import { Box, styled as styledMUI } from '@mui/material';

export const DivCalendarHead = styledMUI(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-bottom: 14px;
  padding: 18px;
  background-color: ${theme.palette.background.paper};
  color: ${theme.palette.text.primary};
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 14px 40px;
    border: 1px solid rgba(220, 227, 229, 0.8);
  }
  @media screen and (min-width: 1440px) {
    padding: 14px 60px;
  }
`
);

export const CalendarHeaderCell = styledMUI(Box, {
  shouldForwardProp: props => props !== 'isWeekDay',
})(
  ({ isWeekDay, theme }) => `
  color: ${isWeekDay ? '#3E85F3' : theme.palette.text.primary};
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
`
);
