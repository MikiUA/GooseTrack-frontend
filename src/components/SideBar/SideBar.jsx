import {
  Overlay,
  StyleHeagerText,
  StyledBox,
  StyledButtonClose,
  StyledButtonLogout,
  StyledContainer,
  StyledHeader,
  StyledLink,
  StyledPicture,
  StyledUser,
  UserNavTitle,
} from './SideBar.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import { useLogoutMutation } from 'API/auth-operations';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'API/userSlice';
import { LogoIcon } from './SidebarImg.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

const basePath = '../../images/logoGoose/';

const SideBar = ({ onClose, isOpen }) => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const path = useLocation();
  const navigate = useNavigate();

  const isAccount = useMemo(() => {
    if (path.pathname.includes('/account')) return true;
    return false;
  }, [path]);

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
              srcSet={`${basePath}goose1x.png 1x, ${basePath}goose2x.png 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${basePath}goosetablet1x.png 1x, ${basePath}goosetablet2x.png 2x`}
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${basePath}goosedesk1x.png 1x, ${basePath}goosedesk2x.png 2x`}
            />
            <LogoIcon
              src={require('../../images/logoGoose/goosedesk2x.png')}
              alt="Logo goose"
            />
          </StyledPicture>
          <StyleHeagerText> GooseTrack</StyleHeagerText>

          <StyledButtonClose
            variant="text"
            onClick={onClose}
            startIcon={<CloseIcon />}
          ></StyledButtonClose>
        </StyledHeader>
        <StyledUser>User Panel</StyledUser>

        <StyledLink disabled={isAccount} onClick={() => navigate('/account')}>
          <UserNavTitle onClick={onClose}>My account</UserNavTitle>
        </StyledLink>
        <StyledLink disabled={!isAccount} onClick={() => navigate('/calendar')}>
          <UserNavTitle onClick={onClose}>Calendar</UserNavTitle>
        </StyledLink>
      </StyledBox>
      <StyledButtonLogout
        variant="contained"
        onClick={logOut}
        endIcon={<LogoutIcon />}
      >
        Log out
      </StyledButtonLogout>
      {isOpen && <Overlay onClick={onClose} />}
    </StyledContainer>
  );
};

export default SideBar;
