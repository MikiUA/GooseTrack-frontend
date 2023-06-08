import styled from 'styled-components';

export const StyledUserBox = styled.div`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 17px;
  }
`;

export const StyledLink = styled.a`
  @media screen and (min-width: 375px) {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
