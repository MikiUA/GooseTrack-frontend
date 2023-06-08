import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  WrapperMain,
  WrapperPageContent,
  WrapperSideBarContent,
} from './MainLayout.styled';
import { Header } from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';

const MainLayout = () => {
  return (
    <>
      <WrapperMain>
        <WrapperSideBarContent><SideBar /></WrapperSideBarContent>
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
