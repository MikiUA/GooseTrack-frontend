import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  SideButton,
  WrapperMain,
  WrapperPageContent,
  WrapperSideBarContent,
  WrapperHeader,
  RootWrapperMain,
} from './MainLayout.styled';
import { Header } from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import { Loader } from 'components/Loader/Loader';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen(pS => !pS);

  return (
    <>
      <RootWrapperMain>
        <WrapperMain>
          <WrapperSideBarContent data={isMenuOpen ? 'true' : undefined}>
            <SideBar onClose={handleToggle} isOpen={isMenuOpen} />
          </WrapperSideBarContent>
          <WrapperPageContent>
            <WrapperHeader>
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
              <Header />
            </WrapperHeader>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </WrapperPageContent>
        </WrapperMain>
      </RootWrapperMain>
    </>
  );
};

export default MainLayout;
