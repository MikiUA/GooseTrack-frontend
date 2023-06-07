import styled from '@emotion/styled';

export const CalendarToolbarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
