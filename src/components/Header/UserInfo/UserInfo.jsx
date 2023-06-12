import { StyledUserBox, StyledLink } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { getUserInfo } from 'API/userSlice';
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

export const UserInfo = ({ data }) => {
  const userInfo = useSelector(getUserInfo);
  return (
    <StyledUserBox>
      <StyledLink>{userInfo.name}</StyledLink>
      <StyledAvatar src={userInfo.avatarUrl} />
    </StyledUserBox>
  );
};
