
import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow:scroll;
  display: flex;
  flex-direction:column;
  text-align: center;
  background-color: #dcebf7;
  position: fixed;
  justify-content:center;
`;


export const StyledImg = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    width: 400px;
    height: 416px;
    left: 49px;
    top: 354px;


  }
`;
