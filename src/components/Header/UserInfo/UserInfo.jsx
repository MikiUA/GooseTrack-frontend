import { StyledUserBox, StyledLink } from './UserInfo.styled';

import { Avatar, styled } from '@mui/material';

const StyledAvatar = styled(Avatar)`
  @media screen and (min-width: 375px) {
    width: 32px;
    height: 32px;
    margin-left: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;

    margin-left: 14px;
  }
`;

export const UserInfo = () => {
  return (
    <StyledUserBox>
      <StyledLink>User</StyledLink>
      <StyledAvatar />
    </StyledUserBox>
  );
};
