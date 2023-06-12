import { StyledHeader, StyledIcon } from './HeaderPageName.styled';
import { useLocation } from 'react-router-dom';

export const HeaderPageName = () => {
  const location = useLocation();

  const getPageTitle = pathname => {
    if (pathname.startsWith('/calendar')) {
      return 'Calendar';
    } else if (pathname.startsWith('/account')) {
      return 'User Profile';
    } else {
      return '';
    }
  };

  const pageTitle = getPageTitle(location.pathname);
  // console.log(desiredString); // 'calendar'

  return (
    <div>
      <StyledHeader>{pageTitle}</StyledHeader>
      <StyledIcon />
    </div>
  );
};
