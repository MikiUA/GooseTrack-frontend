import {
  StyleHeagerText,
  StyledBox,
  StyledButtonClose,
  StyledButtonLogout,
  StyledContainer,
  StyledHeader,
  StyledImgAuthNav,
  StyledLink,
  StyledPicture,
  StyledUser,
  UserNavTitle,
} from './SideBar.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useLogoutMutation } from 'API/auth-operations';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'API/userSlice';
// import { UserNav } from './UserNav/UserNav';

// import { ReactComponent as LeftArrow } from '../../imagesMainPage/svg/leftarrow.svg';
// import { ReactComponent as RightArrow } from '../../imagesMainPage/svg/rightarrow.svg';

const basePath = '../../images/logoGoose/';

const SideBar = ({ onClose, isOpen }) => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const logOut = () => {
    try {
      logout();

      dispatch(setUserInfo({ name: '', email: '', avatarUrl: '' }));

      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <StyledContainer data={isOpen ? 'true' : undefined}>
      <StyledBox>
        <StyledHeader>
          <StyledPicture>
            <source
              media="(min-width: 375px)"
              srcSet={`${basePath}logoGOOSE-mob.png 1x, ${basePath}logoGOOSEmob@2x.png 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${basePath}logo-GOOSE-tab.png 1x, ${basePath}logo-GOOSE-tab@2x.png 2x`}
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${basePath}logo-GOOSE-desk.png 1x, ${basePath}logo-GOOSE-desk@2x.png 2x`}
            />
            <StyledImgAuthNav>
              <img
                src={require('../../images/logoGoose/logo-GOOSE-desk.png')}
                alt="Logo goose"
              />
            </StyledImgAuthNav>
          </StyledPicture>
          <StyleHeagerText> GooseTrack</StyleHeagerText>

          <StyledButtonClose
            variant="text"
            onClick={onClose}
            startIcon={<CloseIcon />}
          ></StyledButtonClose>
        </StyledHeader>
        <StyledUser>User Panel</StyledUser>
        <StyledLink to="/account">
          <UserNavTitle>My account</UserNavTitle>
        </StyledLink>
        <StyledLink to="/calendar">
          <UserNavTitle> Calendar</UserNavTitle>
        </StyledLink>
      </StyledBox>
      <StyledButtonLogout
        variant="contained"
        onClick={logOut}
        endIcon={<LogoutIcon />}
      >
        Log out
      </StyledButtonLogout>
    </StyledContainer>
  );
};

export default SideBar;
