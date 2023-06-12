import { Button, styled } from '@mui/material';

export const ChangeButtonSave = styled(Button)`
  @media screen and (min-width: 375px) {
    padding: 8px 20px;

    width: 144px;
    height: 42px;

    background: #3e85f3;
    border-radius: 8px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-align: center;

    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 198px;
    height: 48px

    margin-bottom: 24px;
  }
`;
