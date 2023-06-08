import { StyledHeader, StyledIcon } from './HeaderPageName.styled';

export const HeaderPageName = () => {
  const pathSegments = window.location.pathname.split('/');
  const calendarString = pathSegments.find(segment => segment === 'calendar');
  // console.log(desiredString); // 'calendar'

  return (
    <div>
      {calendarString ? (
        <StyledHeader>Calendar</StyledHeader>
      ) : (
        <StyledHeader>User Profile</StyledHeader>
      )}
      <StyledIcon />
    </div>
  );
};
