import { Box, Button, styled as styledMUI } from '@mui/material';
import styled from 'styled-components';

export const StyledWrapCalendar = styled.div`
  @media screen and (max-width: 374px) {
    max-width: 100%;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  max-width: 100%;
  backgrcound-color: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(220, 227, 229, 0.8);
  }
`;

export const GridCell = styledMUI(Box, {
  shouldForwardProp: props => props !== 'isNotCurrMonth',
})(
  ({ isNotCurrMonth, theme }) => `
  // display: flex;
  // font-size: 10px;
  // justify-content: flex-end;
  // padding-bottom: 64px;
  box-sizing: border-box;
  display: flex;
  width: 48px;
  height: 94px;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 10px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border: 1px solid ${theme.palette.borderGray};
  background-color: ${theme.palette.background.paper};
  color: ${theme.palette.text.primary};
  pointer-events: ${isNotCurrMonth ? 'none' : 'auto'};
  opacity: ${isNotCurrMonth ? '0.4' : '1'};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(220, 227, 229, 0.8);
    width: 100px;
    height: 144px;
  }
    @media screen and (min-width: 1440px) {
    width: 155px;
    height: 125px;
  }
`
);

export const DateBtn = styledMUI(Button)`
// display: flex;
// padding: 4px 6px;
// justify-content: center;
// align-items: center;
 box-sizing: border-box;
 min-width: 0;
margin-left: auto;
  padding: 4px 6px;
  align-items: center;

font-family: 'Inter';
font-style: normal;
color: #343434;
font-weight: 700;

@media screen and (min-width: 375px) {
  margin-top: 8px;
  margin-right: 4px;
  font-size: 12px;
  line-height: 1.17;
}
@media screen and (min-width: 768px) {
  margin-top: 14px;
  margin-right: 14px;
  font-size: 16px;
  line-height: 1.12;
}
@media screen and (min-width: 1440px) {
}
`;
