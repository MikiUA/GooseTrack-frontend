import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://goosetrack-backend-zk53.onrender.com';
const jwt = JSON.parse(localStorage.getItem('refreshToken'));

const authenticationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    registration: builder.mutation({
      query: body => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    refreshToken: builder.query({
      query: () => ({
        url: '/auth/refreshToken',
        method: 'GET',
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'DELETE',
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation,useRefreshTokenQuery, useLogoutMutation } =
  authenticationApi;
export default authenticationApi;
