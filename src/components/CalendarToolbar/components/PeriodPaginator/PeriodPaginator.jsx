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

export default function PeriodPaginator({
  isDay,
}) {
  const { currentDate } = useParams();
  const navigate = useNavigate();
  const isLessAllowed = useMemo(() => checkIfLessAllowed(currentDate), [currentDate]);
  const formattedDate =
    isDay
      ? dayjs(currentDate).format('DD MMMM YYYY')
      : dayjs(currentDate).format('MMMM YYYY');

  // const shouldDisable = date < Date.now();
  function getNavigateLink(isDay, isBackward) {
    const type = isDay ? 'day' : 'month';
    const dateForLink = dayjs(currentDate).add(!isBackward ? 1 : -1, type).format('YYYY-MM-DD');
    return `/calendar/${type}/${dateForLink}`
  }
  return (
    <PeriodPaginationWrapper>
      <Box>
        <DateField>{formattedDate}</DateField>
      </Box>
      <ButtonsWrapper>
        <StyledLink onClick={() => navigate(getNavigateLink(isDay, true))} disabled={!isLessAllowed}>
          <NavigateBeforeIcon />
        </StyledLink>
        <StyledLink onClick={() => navigate(getNavigateLink(isDay))}>
          <NavigateNextIcon />
        </StyledLink>
      </ButtonsWrapper>
    </PeriodPaginationWrapper>
  );
}

// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import dayjs from 'dayjs';
// import {
//   ButtonsWrapper,
//   DateField,
//   PeriodPaginationWrapper,
//   StyledHiChevronLeft,
//   StyledHiChevronRight,
//   StyledLink,
//   StyledLinkToday,
// } from './PeriodPaginator.styled';
// import { useAuth } from 'hooks';

// export default function PeriodPaginator({
//   activeDate,
//   changeActiveDay,
//   isDayPage,
//   currentDate,
// }) {
//   const { user } = useAuth();
//   const date = isDayPage
//     ? activeDate.format('DD MMMM YYYY')
//     : activeDate.format('MMMM YYYY');

//   const dateForLinkNext = isDayPage
//     ? activeDate.add(1, 'day').format('DDMMMMYYYY')
//     : activeDate.add(1, 'month').format('MMMMYYYY');

//   const dateForLinkPrev = isDayPage
//     ? activeDate.subtract(1, 'day').format('DDMMMMYYYY')
//     : activeDate.subtract(1, 'month').format('MMMMYYYY');

//   const isCreatedAtDay = isDayPage
//     ? dayjs(user.createdAt).startOf('day').isSameOrBefore(activeDate)
//     : dayjs(user.createdAt).startOf('month').isSameOrBefore(activeDate);

//   return (
//     <PeriodPaginationWrapper>
//       <div>
//         <DateField>{date}</DateField>
//       </div>
//       <ButtonsWrapper>
//         {isDayPage ? (
//           <>
//             <StyledLink
//               disabled={isCreatedAtDay}
//               onClick={() => changeActiveDay(-1)}
//               to={`/calendar/day/${dateForLinkPrev}`}
//             >
//               <StyledHiChevronLeft />
//             </StyledLink>
//             <StyledLink
//               onClick={() => changeActiveDay(1)}
//               to={`/calendar/day/${dateForLinkNext}`}
//             >
//               <StyledHiChevronRight />
//             </StyledLink>

//             <StyledLinkToday
//               onClick={() => changeActiveDay(0)}
//               to={`/calendar/day/${dateForLinkToday}`}
//             >
//               Today
//             </StyledLinkToday>
//           </>
//         ) : (
//           <>
//             <StyledLink
//               disabled={isCreatedAtDay}
//               to={`/calendar/month/${dateForLinkPrev}`}
//               onClick={() => changeActiveDay(-1)}
//             >
//               <StyledHiChevronLeft />
//             </StyledLink>

//             <StyledLink
//               to={`/calendar/month/${dateForLinkNext}`}
//               onClick={() => changeActiveDay(1)}
//             >
//               <StyledHiChevronRight />
//             </StyledLink>
//             <StyledLinkToday
//               onClick={() => changeActiveDay(0)}
//               to={`/calendar/month/${dateForLinkToday}`}
//             >
//               Today
//             </StyledLinkToday>
//           </>
//         )}
//       </ButtonsWrapper>
//     </PeriodPaginationWrapper>
//   );
// }
