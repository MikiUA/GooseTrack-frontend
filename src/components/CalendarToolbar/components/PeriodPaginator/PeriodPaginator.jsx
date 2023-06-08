import React from 'react';
import {
  PeriodPaginationWrapper,
  DateField,
  ButtonsWrapper,
  StyledLink,
} from './PeriodPaginator.styled';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function PeriodPaginator() {
  const isDayPage = false;
  const { currentDate } = useParams();

  return (
    <PeriodPaginationWrapper>
      <div>
        <DateField>{currentDate}</DateField>
      </div>
      <ButtonsWrapper>
        {isDayPage ? (
          <>
            <StyledLink>
              <NavigateBeforeIcon />
            </StyledLink>
            <StyledLink>
              <NavigateNextIcon />
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink>
              <NavigateBeforeIcon />
            </StyledLink>
            <StyledLink>
              <NavigateNextIcon />
            </StyledLink>
          </>
        )}
      </ButtonsWrapper>
    </PeriodPaginationWrapper>
  );
}
