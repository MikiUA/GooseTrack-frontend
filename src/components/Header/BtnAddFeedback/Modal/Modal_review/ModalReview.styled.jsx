import { Box, TextField, styled } from '@mui/material';

export const StyledTextField = styled(TextField)`
  && .MuiInputBase-root {
    width: 395px;
    height: 127px;
    background: #f7f7f7;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;

    @media screen and (max-width: 375px) {
      width: 300px;
    }

    @media screen and (min-width: 375px) and (max-width: 465px) {
      width: 320px;
    }
  }
`;

export const StyledReviewBox = styled(Box)`
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;
