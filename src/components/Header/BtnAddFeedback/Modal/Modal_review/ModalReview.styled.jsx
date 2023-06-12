import { Box, TextField, styled } from '@mui/material';

export const StyledTextField = styled(TextField)`
  && .MuiInputBase-root {
    @media screen and (min-width: 375px) {
      width: 295px;
      height: 111px;
      background: #f7f7f7;
      border-radius: 8px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
    }

    @media screen and (min-width: 768px) {
      width: 404px;
      height: 127px;
    }
  }
`;

export const StyledReviewBox = styled(Box)`
  @media screen and (min-width: 375px) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;
