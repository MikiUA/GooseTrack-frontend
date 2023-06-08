import styled from 'styled-components';

export const StyledBox = styled.div`
  @media screen and (min-width: 375px) {
    width: 100%;
    max-width: 335px;
    height: 32px;
    margin-top: 24px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 704px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 1100px;
    height: 42px;

    margin-top: 40px;
    margin-bottom: 32px;
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
