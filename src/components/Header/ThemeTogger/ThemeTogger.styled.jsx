import styled from 'styled-components';

export const StyledThemeButton = styled.button`
  @media screen and (min-width: 375px) {
    border: none;
    background-color: none;
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
    margin-left: 27px;
  }
`;
