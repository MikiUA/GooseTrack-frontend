import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ButtonsWrapper, StyledLink } from './PeriodTypeSelect.styled';
import { Button, Typography } from '@mui/material';

export default function PeriodTypeSelect() {
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
      >
        <Typography sx={{ textTransform: 'none' }}>Month</Typography>
      </Button>
      <Button
        component={StyledLink}
        to={`/calendar/month/${currentDate}`}
        className={`${isDayRoute ? 'active' : ''} day`}
      >
        <Typography sx={{ textTransform: 'none' }}>Day</Typography>
      </Button>
    </ButtonsWrapper>
  );
}
