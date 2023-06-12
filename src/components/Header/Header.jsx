import { HeaderPageName } from './HeaderPageName/HeaderPageName';
import { BtnAddFeedback } from './BtnAddFeedback/BtnAddFeedback';
import { ThemeTogger } from './ThemeTogger/ThemeTogger';
import { UserInfo } from './UserInfo/UserInfo';

import { StyledBox, StyledWrapper, UserBox } from './Header.styled';

import { useCurrentUserInfoQuery } from 'API/userInfo';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'API/userSlice';
import { useEffect } from 'react';

export const Header = () => {
  const { data } = useCurrentUserInfoQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setUserInfo(data));
    }
  }, [data, dispatch]);

  if (!data) {
    return null;
  }

  return (
    <StyledBox>
      <StyledWrapper>
        <HeaderPageName />
        <UserBox>
          <BtnAddFeedback />
          <ThemeTogger />
          <UserInfo data={data} />
        </UserBox>
      </StyledWrapper>
    </StyledBox>
  );
};
