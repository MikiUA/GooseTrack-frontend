import { Button, styled } from '@mui/material';

export const ChangeButtonSave = styled(Button)`
  padding: 8px 20px;

  width: 50%;
  height: 48px;

  background: #3e85f3;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  transition: background-color 0.3s ease-in;
  color: #ffffff;
  &:hover {
    background-color: #1976d2;
  }
`;
export const ChangeButtonCancel = styled(Button)`
  padding: 8px 20px;

  width: 50%;
  height: 48px;

  background-color: #e5edfa;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  transition: background-color 0.3s ease-in;
  color: #343434;
  &:hover {
    background-color: #cbcdd3;
  }
`;
