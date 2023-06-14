import { Button, styled } from '@mui/material';

export const StyledButtonSave = styled(Button)`
  padding: 8px 20px;

  width: 100%;
  height: 48px;

  margin-bottom: 20px;

  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  @media screen and (min-width: 768px) {
    height: 48px;

    margin-bottom: 24px;
  }
`;
