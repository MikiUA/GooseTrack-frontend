import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  SideButton,
  WrapperMain,
  WrapperPageContent,
  WrapperSideBarContent,
} from './MainLayout.styled';
import { Header } from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen(pS => !pS);

  return (
    <>
      <WrapperMain>
        <WrapperSideBarContent data={isMenuOpen ? true : undefined}>
          {isMenuOpen ? null : (
            <SideButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleToggle}
            >
              <MenuIcon />
            </SideButton>
          )}

          <SideBar onClose={handleToggle} isOpen={isMenuOpen} />
        </WrapperSideBarContent>
        <WrapperPageContent>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </WrapperPageContent>
      </WrapperMain>
    </>
  );
};

export default MainLayout;
