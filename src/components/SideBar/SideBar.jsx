import {
  StyledBox,
  StyledButton,
  StyledButtonClose,
  StyledButtonLogout,
  StyledContainer,
  StyledHeader,
  StyledUser,
} from './SideBar.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useLogoutMutation } from 'API/auth-operations';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'API/userSlice';

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
    <StyledContainer data={isOpen ? true : undefined}>
      <StyledBox>
        <StyledHeader>
          GooseTrack
          <StyledButtonClose
            variant="text"
            onClick={onClose}
            startIcon={<CloseIcon />}
          ></StyledButtonClose>
        </StyledHeader>
        <StyledUser>User Panel</StyledUser>
        <StyledButton variant="text" startIcon={<PersonAddAltIcon />}>
          My account
        </StyledButton>
        <StyledButton variant="text" startIcon={<CalendarMonthIcon />}>
          Calendar
        </StyledButton>
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
