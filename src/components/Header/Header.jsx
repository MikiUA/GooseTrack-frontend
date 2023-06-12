import { HeaderPageName } from './HeaderPageName/HeaderPageName';
import { BtnAddFeedback } from './BtnAddFeedback/BtnAddFeedback';
import { ThemeTogger } from './ThemeTogger/ThemeTogger';
import { UserInfo } from './UserInfo/UserInfo';

import MenuIcon from '@mui/icons-material/Menu';
import { StyledBox, StyledWrapper, UserBox } from './Header.styled';
import {
  SideButton,
  WrapperSideBarContent,
} from 'components/MainLayout/MainLayout.styled';
import { useState } from 'react';
import SideBar from 'components/SideBar/SideBar';

export const Header = ({ onClose, isOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen(pS => !pS);

  return (
    <StyledBox>
      <StyledWrapper>
        <HeaderPageName />
        <UserBox>
          <BtnAddFeedback />
          <ThemeTogger />
          <UserInfo />
        </UserBox>
      </StyledWrapper>
    </StyledBox>
  );
};
