import { RedirectLink } from './AuthNavigate.styled';

export const AuthNavigate = ({ redirect, nameLink }) => {
  return (
    <>
      <RedirectLink to={redirect}>{nameLink}</RedirectLink>
    </>
  );
};
