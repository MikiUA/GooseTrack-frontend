import { StyledHeader, StyledIcon } from './HeaderPageName.styled';

export const HeaderPageName = () => {
  const currentPage = window.location.pathname;

  return (
    <div>
      {currentPage === '/' && <StyledHeader>User Profile</StyledHeader>}
      {currentPage === '/calendar' && <StyledHeader>Calendar</StyledHeader>}
      <StyledHeader>Hello World</StyledHeader>
      <StyledIcon />
    </div>
  );
};
