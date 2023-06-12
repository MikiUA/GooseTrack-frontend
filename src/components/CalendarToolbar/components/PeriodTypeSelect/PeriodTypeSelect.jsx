import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonsWrapper, StyledLink } from './PeriodTypeSelect.styled';
import Typography from '@mui/material/Typography';

export default function PeriodTypeSelect({ isDay }) {
  const { currentDate } = useParams();
  const navigate = useNavigate();
  return (
    <ButtonsWrapper>
      <StyledLink
        onClick={() => navigate(`/calendar/month/${currentDate}`)}
        disabled={!isDay}
      >
        <Typography sx={{ textTransform: 'none' }}>Month</Typography>
      </StyledLink>
      <StyledLink
        onClick={() => navigate(`/calendar/day/${currentDate}`)}
        disabled={isDay}
      >
        <Typography sx={{ textTransform: 'none' }}>Day</Typography>
      </StyledLink>
    </ButtonsWrapper>
  );
}
