import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, jwt } from './apiParams';


const userInfo = createApi({
  reducerPath: 'userInfo',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    currentUserInfo: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
        headers: { Authorization: `Bearer ${jwt()}` },
      }),providesTags:['users'],
    }),
    updateUserInfo: builder.mutation({
      query: body => ({
        url: '/users',
        method: 'PATCH',
        body,
        headers: { Authorization: `Bearer ${jwt()}` },
      }),invalidatesTags:['users'],
    }),
  }),
});

export const { useCurrentUserInfoQuery, useUpdateUserInfoMutation } = userInfo;

export default userInfo;
