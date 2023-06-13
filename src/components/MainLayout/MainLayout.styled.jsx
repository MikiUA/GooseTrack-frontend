import { styled, Box } from '@mui/material';
import { IconButton } from '@mui/material';

export const WrapperMain = styled(Box)(
  ({ theme }) => `
  display:flex;
  min-height: 100vh;
   width: 100vw;
  background-color:${theme.palette.background.default};
  color:${theme.palette.text.primary}
`
);

export const WrapperSideBarContent = styled(Box)(
  ({ theme, data }) => `
  border-right:1px solid ${theme.palette.borderGray};
  background-color:${theme.palette.background.sidebar};
  color:${theme.palette.text.primary}

  width: ${props => (props.data ? '289px' : 'none')};

  @media screen and(min-width: 1440px) {
    display: flex;
    justify-content: end;

    // min-width: 289px;
    // width: calc((100vw - 1440px) / 2 + 289px);
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

  padding-top:24px;

  @media screen and (min-width: 1440px) {
    padding-top:40px;

    flex-wrap:wrap;
    align-content:flex-end;
  }
`
);

export const SideButton = styled(IconButton)(`
    @media (min-width: 1440px) {
    display: none;
  }

`);

export const WrapperHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 335px;
  height: 32px;
  gap: 30px;

  @media screen and (min-width: 768px) {
    width: 100vw;
    max-width: 704px;
    height: 42px;
  }

  @media screen and (min-width: 1440px) {
    width: 80%;
    max-width: 1100px;
    height: 42px;
  }
`;
