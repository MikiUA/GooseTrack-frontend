import { StyledUserBox, StyledLink, StyledAvatar } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { getUserInfo } from 'API/userSlice';

export const UserInfo = ({ data }) => {
  const userInfo = useSelector(getUserInfo);
  return (
    <StyledUserBox>
      <StyledLink>{userInfo.name}</StyledLink>
      <StyledAvatar src={userInfo.avatarUrl} />
    </StyledUserBox>
  );
};
