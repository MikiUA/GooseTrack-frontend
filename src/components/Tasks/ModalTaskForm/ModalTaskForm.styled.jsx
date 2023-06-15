import { styled, Box, Button, InputLabel } from '@mui/material';
import Icon from '../../../utils/Icon/Icon';

export const TaskForm = styled(Box)(
 ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 19px;
  background-color: ${theme.palette.mode === 'dark' ? '#171820' : '#FFFFFF'}; 
`);

export const TaskFormWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 267px;
  @media screen and (min-width: 768px) {
    max-width: 340px;
  }
`;

export const TaskFormLabel = styled(InputLabel)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: rgba(52, 52, 52, 0.8);
  margin-bottom: 8px;
`;

export const TaskFormInputWrap = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 15px;
  max-width: 267px;
  width: 100%;
  margin-top: 18px;
  @media screen and (min-width: 768px) {
    max-width: 340px;
  }
`;
export const TaskFormLabelWrap = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const TaskFormCheckboxWrap = styled(Box)`
  display: flex;
  gap: 10px;
  align-self: flex-start;
  margin: 16px 0 32px;
  @media screen and (min-width: 768px) {
    gap: 26px;
  }
`;

export const TaskFormButtonWrap = styled(Box)`
  display: flex;
  align-items: center;

  gap: 14px;
`;

export const TaskFormButtonAdd = styled(Button)`
  display: flex;
  width: 135px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 20px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
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

export const TaskFormButtonAddIconBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  width: 18px;
  height: 18px;
  margin-top: 3px;
  margin-right: 10px;
  padding: 0;
`;

export const TaskFormButtonAddIcon = styled(Icon)`
  width: 18px;
  height: 18px;
`;

export const TaskFormButtonCancel = styled(Button)`
  width: 135px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 20px;
  border: none;
  height: 42px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #111111;
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
