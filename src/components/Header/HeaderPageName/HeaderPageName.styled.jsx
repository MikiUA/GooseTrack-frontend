import styled from 'styled-components';

export const StyledHeader = styled.h1`
  @media screen and (min-width: 1440px) {
    display: block;
    font-family: Inter;
    font-weight: 700;
    font-size: 32px;
    line-height: 1;
  }

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
