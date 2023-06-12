import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, rjwt } from './apiParams';

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
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'DELETE',
        headers: { Authorization: `Bearer ${rjwt}` },
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation,useRefreshTokenQuery, useLogoutMutation } =
  authenticationApi;
export default authenticationApi;
