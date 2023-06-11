import styled from '@emotion/styled';

export const CalendarToolbarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 100%;
  max-height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 32px;
    max-width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 1100px;
  }
`;
