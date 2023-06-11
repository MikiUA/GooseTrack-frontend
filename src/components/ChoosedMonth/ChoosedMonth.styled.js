import styled from "styled-components";

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
  background-color: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(220, 227, 229, 0.8);
  }
`;

export const GridCell = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: flex-end;
  padding-bottom: 64px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  pointer-events: ${props => (props.isNotCurrMonth ? 'none' : 'auto')};
  opacity: ${props => (props.isNotCurrMonth ? '0.4' : '1')};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    border: 1px solid rgba(220, 227, 229, 0.8);
  }
`;

export const DateWrap = styled.div`
  display: flex;
  padding: 4px 6px;
  justify-content: center;
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
export const ToDay = styled.div`
  display: flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  color: #ffffff;
  font-weight: 700;

  line-height: 1.17;
  border-radius: 6px;
  background-color: #3e85f3;

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