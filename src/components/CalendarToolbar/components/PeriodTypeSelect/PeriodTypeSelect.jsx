import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ButtonsWrapper, StyledLink } from './PeriodTypeSelect.styled';
import { Button, Typography } from '@mui/material';

export default function PeriodTypeSelect({ onChangeType }) {
  const { currentDate } = useParams();
  const location = useLocation();
  const isMonthRoute = location.pathname.includes('month');
  const isDayRoute = location.pathname.includes('day');
  return (
    <ButtonsWrapper>
      <Button
        component={StyledLink}
        to={`/calendar/month/${currentDate}`}
        className={`${isMonthRoute ? 'active' : ''} month`}
        onClick={() => onChangeType('month')}
      >
        <Typography sx={{ textTransform: 'none' }}>Month</Typography>
      </Button>
      <Button
        component={StyledLink}
        to={`/calendar/day/${currentDate}`}
        className={`${isDayRoute ? 'active' : ''} day`}
        onClick={() => onChangeType('day')}
      >
        <Typography sx={{ textTransform: 'none' }}>Day</Typography>
      </Button>
    </ButtonsWrapper>
  );
}
