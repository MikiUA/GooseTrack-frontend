import { useState } from 'react';
import { setUserInfo } from 'API/userSlice';
import { useDispatch } from 'react-redux';
import { BASE_URL, rjwt } from 'API/apiParams';

const useRefreshUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  function refreshUser() {
    // console.log('DOIT');
    setIsLoading(true);
    function finishCheck(user = null) {
      if (!user) dispatch(setUserInfo({ name: '', email: '', avatarUrl: '' }));
      else dispatch(setUserInfo(user));
      setIsLoading(false);
    }
    const reToken = rjwt();
    // console.log(reToken);
    fetch(BASE_URL + '/auth/refreshtoken', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${reToken}`,
        'Content-Type': 'application/json', // optional, adjust based on your API requirements
      },
    })
      .then(response => {
        finishCheck();
        if (response.status !== 200) finishCheck();
        response.json().then(({ token, user }) => {
          localStorage.setItem('token', `"${token}"`);
          finishCheck(user);
        });
      })
      .catch(err => {
        console.log({ err });
        finishCheck();
      });
  }
  return { isLoading, refreshUser };
};
export default useRefreshUser;
