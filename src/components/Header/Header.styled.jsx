import styled from 'styled-components';

export const StyledBox = styled.div`
  @media screen and (min-width: 375px) {
    width: 100%;
    max-width: 335px;
    margin-left: auto;
    margin-right: auto;
    background-color: red;
    height: 32px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 704px;
    margin-left: auto;
    background-color: red;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: 32px;
    background-color: red;
    height: 42px;
  }
`;

export const StyledWrapper = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    max-height: 100%;
  }
`;

export const UserBox = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
  }
`;
