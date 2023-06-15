// import { TypeSpecimenTwoTone } from '@mui/icons-material';
import { styled, Box, Button, Typography } from '@mui/material';
import Icon from 'utils/Icon/Icon';

export const ButtonAdd = styled(Button)(
  ({ theme }) => `
    padding-top: 15px;
    padding-bottom: 15px;
    margin-right: 6px;
    text-align: center;
    border-radius: 8px;
    border: 1px dashed #3e85f3;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    cursor: pointer;
    // background-color: ${theme.palette.mode === 'dark' ? '#3E85F3' : '#e3f3ff'};
    // color: ${theme.palette.mode === 'dark' ? '#fff' : '#111'};
`
);

export const ButtonIcon = styled(Button)`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  min-width: 20px;
`;

export const ButtonIconStyled = styled(Icon)(
  ({ theme }) => `
  stroke: ${theme.palette.mode === 'dark' ? '#ffffff' : '#111'};
  transition: linear 0.3s;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`
);

export const ButtonIconStyledPlus = styled(Icon)(
  ({ theme }) => `
  margin-right: 8px;
  stroke: ${theme.palette.mode === 'dark' ? '#fff' : '#111'};
  transition: linear 0.3s;

  // &:hover,
  // &:focus {
  //   stroke: #3e85f3;
  }
`
);

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(Typography)(
  ({ theme }) =>`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: ${theme.palette.mode === 'dark' ? '#fff' : '#111'};
`);
