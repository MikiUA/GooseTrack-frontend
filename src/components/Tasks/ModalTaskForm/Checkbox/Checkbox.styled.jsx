import styles from 'styled-components';
import { styled, Typography, Box } from '@mui/material';

export const CheckboxLabel = styles.label`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styles.input`
  display: none;
`;

export const CheckboxStyle = styles.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: ${prop => `1px solid ${prop.color}`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${prop => (prop.checked ? `${prop.color}80` : prop.color)};
`;

export const InnerCircleStyle = styled(Box)(
  ({ theme }) => `
 width: 8px;
  height: 8px;
 border-radius: 50%;
background-color: inherit;
 border: ${
   theme.palette.mode === 'dark' ? '1px solid #343434' : '1px solid #ffffff'
 };

`
);

export const CheckboxSpan = styled(Typography)(
  ({ theme }) => `
  margin-left: 5px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${theme.palette.mode === 'dark' ? '#FFFFFF' : '#111'};
`
);
