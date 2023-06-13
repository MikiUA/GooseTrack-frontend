import { Box, Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  padding: 8px 20px;

  width: 97px;
  height: 32px;

  background: #3e85f3;
  border-radius: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    width: 130px;
    height: 42px;
    border-radius: 14px;

    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const FeedbackWrapper = styled(Box)`
  @media screen and (min-width: 375px) {
    max-height: 564px;
  }

  @media screen and (min-width: 768px) {
    max-height: 673px;
  }
`;
