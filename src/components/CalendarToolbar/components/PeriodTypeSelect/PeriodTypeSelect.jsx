import React from 'react';
import { ButtonsWrapper, StyledLink } from './PeriodTypeSelect.styled';
import Button from '@mui/material/Button';

export default function PeriodTypeSelect() {
  return (
    <ButtonsWrapper>
      <Button component={StyledLink}>Month</Button>
      <Button component={StyledLink}>Day</Button>
    </ButtonsWrapper>
  );
}
