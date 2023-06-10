import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://goosetrack-backend-zk53.onrender.com';
const jwt = JSON.parse(localStorage.getItem('token'));

const taskUtils = createApi({
  reducerPath: 'taskUtils',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    allTask: builder.query({
      query: () => {
        return {
          url: '/tasks',
          method: 'GET',
          headers: { Authorization: `Bearer ${jwt}` },
        };
      },
    }),
    addTask: builder.query({
      query: body => ({
        url: '/tasks',
        method: 'POST',
        body,
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
    updateTaskById: builder.query({
      query: (body, id) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body,
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
    updateTaskPropertiesById: builder.query({
      query: (body, id) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body,
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
    deleteTaskById: builder.query({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${jwt}` },
      }),
    }),
  }),
});

export const {
  useLazyAllTaskQuery,
  useLazyAddTaskQuery,
  useUpdateTaskByIdQuery,
  useUpdateTaskPropertiesByIdQuery,
  useDeleteTaskByIdQuery,
} = taskUtils;

export default taskUtils;
