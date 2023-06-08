import { Button, styled } from '@mui/material';

export const StyledToggleThemeBox = styled(Button)`
  @media screen and (min-width: 375px) {
    display: block;
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
