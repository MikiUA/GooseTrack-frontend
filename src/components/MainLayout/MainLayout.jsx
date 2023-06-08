import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Box } from '@mui/material';
import {
  StyledMain,
  WrapperMain,
  WrapperSideBarContent,
} from './MainLayout.styled';
import { Header } from 'components/Header/Header';
// import SideBar from 'components/SideBar/SideBar';

const MainLayout = () => {
  return (
    <>
      <StyledMain>
        <WrapperMain>
          <WrapperSideBarContent>{/* <SideBar /> */}</WrapperSideBarContent>
          <Box>
            <Header/>
            <h2>SideBar</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Box>
        </WrapperMain>
      </StyledMain>
    </>
  );
};

export default MainLayout;
