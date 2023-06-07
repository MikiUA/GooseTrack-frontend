import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
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
const SideBar = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <StyledHeader>
          GooseTrack
          <StyledButtonClose
            variant="text"
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
      <StyledButtonLogout variant="contained" endIcon={<LogoutIcon />}>
        Log out
      </StyledButtonLogout>
    </StyledContainer>
  );
};

export default SideBar;
