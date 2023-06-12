import { styled, Box } from '@mui/material';
import { IconButton } from '@mui/material';

export const WrapperMain = styled(Box)(
  ({ theme }) => `
  display:flex;
  min-height: 100vh;
  background-color:${theme.palette.background.default};
  color:${theme.palette.text.primary}
`
);

export const WrapperSideBarContent = styled(Box)(
  ({ theme }) => `
  border-right:1px solid ${theme.palette.borderGray};
  background-color:${theme.palette.background.sidebar};
  color:${theme.palette.text.primary}

  width: ${props => (props.data ? '289px' : 'none')};

  @media screen and(min-width: 1440px) {
    display: flex;
    justify-content: end;

    min-width: 289px;
    width: calc((100vw - 1440px) / 2 + 289px);
  }
`
);

export const WrapperPageContent = styled(Box)(
  ({ theme }) => `
  display:flex;
  flex-grow:1;
  background-color:${theme.palette.background.default};
  flex-direction:column;
  align-items:center;

  @media screen and (min-width: 375px) {
    padding-top:24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top:40px;
  }
`
);

export const SideButton = styled(IconButton)(`
    @media (min-width: 1440px) {
    display: none;
  }

`);

export const WrapperHeader = styled(Box)`
  @media screen and (min-width: 375px) {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 335px;
    height: 32px;
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
  }
`;
