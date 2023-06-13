import React, { useMemo } from 'react';
import {
  PeriodPaginationWrapper,
  DateField,
  ButtonsWrapper,
  StyledLink,
} from './PeriodPaginator.styled';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate, useParams } from 'react-router';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // Импорт английской локали для названий месяцев

function checkIfLessAllowed(currentDate) {
  //this thing allows us to go one month prior to current date. This is intentional. use <= to not allow it
  //Есть кейс когда невозможно переключиться на предыдущий месяц, если выбранная дата этого месяца раньше текущей, теоретически во второй обьект нужно добавить не текущую дату а первое число месяца
  //на самом деле можно просто добавить первое число прошлого месяца во второй обьект и заменить < на <=
  if (dayjs(currentDate) < dayjs()) return false;
  return true;
}

export default function PeriodPaginator({ isDay }) {
  const { currentDate } = useParams();
  const navigate = useNavigate();
  const isLessAllowed = useMemo(
    () => checkIfLessAllowed(currentDate),
    [currentDate]
  );
  const formattedDate = isDay
    ? dayjs(currentDate).format('DD MMMM YYYY')
    : dayjs(currentDate).format('MMMM YYYY');

  // const shouldDisable = date < Date.now();
  function getNavigateLink(isDay, isBackward) {
    const type = isDay ? 'day' : 'month';
    const dateForLink = dayjs(currentDate)
      .add(!isBackward ? 1 : -1, type)
      .format('YYYY-MM-DD');
    return `/calendar/${type}/${dateForLink}`;
  }
  return (
    <PeriodPaginationWrapper>
      <Box>
        <DateField>{formattedDate}</DateField>
      </Box>
      <ButtonsWrapper>
        <StyledLink
          onClick={() => navigate(getNavigateLink(isDay, true))}
          disabled={!isLessAllowed}
        >
          <NavigateBeforeIcon />
        </StyledLink>
        <StyledLink onClick={() => navigate(getNavigateLink(isDay))}>
          <NavigateNextIcon />
        </StyledLink>
      </ButtonsWrapper>
    </PeriodPaginationWrapper>
  );
}
