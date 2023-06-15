import { useCurrentUserInfoQuery } from 'API/userInfo';
import { Loader } from 'components/Loader/Loader';
import UserForm from 'components/UserForm/UserForm';

const AccountPage = () => {
  const { data } = useCurrentUserInfoQuery();

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <UserForm data={data} />
    </>
  );
};

export default AccountPage;
