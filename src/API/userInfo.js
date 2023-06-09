import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://goosetrack-backend-zk53.onrender.com';
const jwt = JSON.parse(localStorage.getItem('token'));

const userInfo = createApi({
  reducerPath: 'userInfo',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    currentUserInfo: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
    updateUserInfo: builder.query({
      query: body => ({
        url: '/users',
        method: 'PATCH',
        body,
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
  }),
});

export const { useCurrentUserInfoQuery, useLazyUpdateUserInfoQuery } = userInfo;

export default userInfo;
