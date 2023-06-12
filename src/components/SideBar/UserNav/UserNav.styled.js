import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// export const UserNavWrap = styled.div`
//   box-sizing: border-box;
//   font-family: 'Inter';
//   font-weight: 600;
//   margin-top: 64px;
//   width: 185px;
//   margin-bottom: 32px;

//   @media screen and (min-width: 768px) {
//     margin-top: 50px;
//     width: 225px;
//   }

//   @media screen and (min-width: 1440px) {
//     margin-top: 32px;
//     width: 241px;
//   }
// `;

export const UserNavTitle = styled.div`
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1.25;
  color: rgba(52, 52, 52, 0.5);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.21;
    margin-bottom: 32px;
  }
`;

export const UserNavItem = styled(NavLink)`
  stroke: rgba(52, 52, 52, 0.5);
  fill: none;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  padding: 16px 20px;
  border-radius: 8px;
  width: 100%;
  text-decoration: none;
  color: rgba(52, 52, 52, 0.5);
  margin-bottom: 18px;
  &.active {
    color: rgba(62, 133, 243, 1);
    // background-color: ${({ theme }) => theme.colors.ligthBlue};
    // fill: ${({ theme }) => theme.colors.ligthBlue};
    // stroke: ${({ theme }) => theme.colors.accent};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgba(62, 133, 243, 1);
    // background-color: ${({ theme }) => theme.colors.ligthBlue};
    // fill: ${({ theme }) => theme.colors.ligthBlue};
    // stroke: ${({ theme }) => theme.colors.accent};
  }
  font-size: 14px;
  line-height: 1.21;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.19;
    margin-bottom: 16px;
    height: 56px;
    padding: 18px 20px;
  }
`;

export const CalendarStyled = styled.div`
  fill: green;
  stroke: red;
  color: inherit;
`;
