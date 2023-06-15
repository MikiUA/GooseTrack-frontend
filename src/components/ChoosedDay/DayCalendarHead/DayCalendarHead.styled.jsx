import {
  Box,
  Button,
  List,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';

export const CalendarHeadBox = styled(Box)(
  ({ theme }) => `  width: 100%;
  margin-top: 24px;
  margin-bottom: 14px;
  background: ${theme.palette.mode === 'dark' ? '#21222C' : '#e3f3ff'};
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;

`
);
export const CalendarHeadList = styled(List)`
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 14px, 19, 5px;
`;
export const CalendarHeadItem = styled(ListItemText)`
  text-align: center;
  list-style: none;
`;

export const CalendarDay = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  text-transform: uppercase;
  text-align: center;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    font-size: 0;
    &:first-letter {
      font-size: 16px;
    }
  }
`;
export const CalendarDayBtn = styled(Button, {
  shouldForwardProp: props => props !== 'isCurrentBtn',
})(
  ({ isCurrentBtn, theme }) => `
  border-radius: 6px;
  background-color: ${isCurrentBtn ? `#3E85F3` : `transparent`};
  border: none;
  padding: 0;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  color:${theme.palette.mode === 'dark' ? '#ffffff' : '#343434'};
  color: ${isCurrentBtn ? `#ffffff` : ``};
  width: 20px;
  height: 22px;

  :hover,
  focus {
    color: #ffffff;
    background: #3e85f3;
    border-radius: 6px;
  }
`
);
