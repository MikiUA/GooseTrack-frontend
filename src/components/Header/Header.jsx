import { HeaderPageName } from './HeaderPageName/HeaderPageName';
import { BtnAddFeedback } from './BtnAddFeedback/BtnAddFeedback';
import { ThemeTogger } from './ThemeTogger/ThemeTogger';
import { UserInfo } from './UserInfo/UserInfo';

import { StyledBox, StyledWrapper, UserBox } from './Header.styled';

export const Header = () => {
 
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
