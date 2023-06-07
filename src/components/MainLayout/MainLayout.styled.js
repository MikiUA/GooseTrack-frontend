import { styled, Box } from '@mui/material';

export const StyledMain = styled(Box)`
  background-color: rgba(247, 246, 249, 1);
  min-height: 100vh;
`;

export const WrapperMain = styled(Box)`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const WrapperSideBarContent = styled(Box)`
  width: 289px;

  @media (min-width: 1440px) {
    display: flex;
    justify-content: end;

    min-width: 289px;
    width: calc((100vw - 1440px) / 2 + 289px);
    background: rgba(247, 246, 249, 1);
  }
`;
