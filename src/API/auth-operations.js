import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = '';
const jwt = localStorage.getItem('jwt');

const authenticationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    registration: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      query: body => ({
        url: '/users/logout',
        method: 'POST',
        body,
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
    getUserInfo: builder.query({
      query: body => ({
        url: '/users/current',
        method: 'GET',
        headers: { Authorization: jwt },
      }),
      providesTags: ['Contacts'],
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserInfoQuery,
} = authenticationApi;
export default authenticationApi;
