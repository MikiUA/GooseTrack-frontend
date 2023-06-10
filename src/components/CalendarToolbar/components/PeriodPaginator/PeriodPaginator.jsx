import React from 'react';
import {
  PeriodPaginationWrapper,
  DateField,
  ButtonsWrapper,
  StyledLink,
} from './PeriodPaginator.styled';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useParams } from 'react-router';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // Импорт английской локали для названий месяцев

export default function PeriodPaginator({
  isDay,
  typePeriod,
  changeActiveDay,
}) {
  const { currentDate } = useParams();

  const formattedDate =
    typePeriod === 'day'
      ? dayjs(currentDate).format('DD MMMM YYYY')
      : dayjs(currentDate).format('MMMM YYYY');

  const dateForLinkNext = isDay
    ? dayjs(currentDate).add(1, 'day').format('DDMMMMYYYY')
    : dayjs(currentDate).add(1, 'month').format('MMMMYYYY');

  const dateForLinkPrev = isDay
    ? dayjs(currentDate).subtract(1, 'day').format('DDMMMMYYYY')
    : dayjs(currentDate).subtract(1, 'month').format('MMMMYYYY');

  // const shouldDisable = date < Date.now();

  return (
    <PeriodPaginationWrapper>
      <Box>
        <DateField>{formattedDate}</DateField>
      </Box>
      <ButtonsWrapper>
        {isDay ? (
          <>
            <StyledLink
              onClick={() => changeActiveDay(-1)}
              to={`/calendar/day/${dateForLinkPrev}`}
            >
              <NavigateBeforeIcon />
            </StyledLink>
            <StyledLink
              onClick={() => changeActiveDay(1)}
              to={`/calendar/day/${dateForLinkNext}`}
            >
              <NavigateNextIcon />
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink
              // disabled={shouldDisable}
              to={`/calendar/month/${dateForLinkPrev}`}
              onClick={() => changeActiveDay(-1)}
            >
              <NavigateBeforeIcon />
            </StyledLink>
            <StyledLink
              to={`/calendar/month/${dateForLinkNext}`}
              onClick={() => changeActiveDay(1)}
            >
              <NavigateNextIcon />
            </StyledLink>
          </>
        )}
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
