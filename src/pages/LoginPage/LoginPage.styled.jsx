import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #dcebf7;
  position: fixed;
`;

export const StyledLoginFormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 335px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 480px;
  }
`;

export const StyledImg = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 368px;
    height: 521px;
    position: absolute;
    right: 60px;
    bottom: 19px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: block;
  margin-top: 18px;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;
