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
