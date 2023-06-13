import { useCurrentUserInfoQuery } from 'API/userInfo';
import UserForm from 'components/UserForm/UserForm';

const AccountPage = () => {
  const { data } = useCurrentUserInfoQuery();

  if (!data) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <UserForm data={data} />
    </>
  );
};

export default AccountPage;
