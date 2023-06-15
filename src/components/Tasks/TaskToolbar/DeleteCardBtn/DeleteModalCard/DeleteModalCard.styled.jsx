import styles from 'styled-components';
import { styled, Box, Typography } from '@mui/material';

export const Container = styled(Box)(
  ({ theme }) => `
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  background-color: ${theme.palette.mode === 'dark' ? '#rgb(33, 34, 44)' : '#fff'};
`
);

export const Title = styled(Typography)(
  ({ theme }) => `
  margin: 0;
  text-align: center;
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: ${theme.palette.mode === 'dark' ? '#fff' : '#3e85f3'};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 600;
  }
`
);

export const ContainerBtn = styles.div`
  display: flex;
  gap: 14px;
`;

export const Button = styles.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 20px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: linear 0.3s;
`;

export const DeleteBtn = styles(Button)`
  display: flex;
  width: 135px;
  height: 42px;
  padding: 8px 16px 8px 20px;
  border: none;
  color: #ffffff;
  background-color: #3e85f3;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #1565c0;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const CancelBtn = styles(Button)`
  width: 135px;
  height: 42px;
  padding: 8px 16px 8px 20px;
  border: none;
  height: 42px;
  background-color: #efefef;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    background-color: #dad7d7;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
