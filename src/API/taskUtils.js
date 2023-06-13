import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, jwt } from './apiParams';

const taskUtils = createApi({
  reducerPath: 'taskUtils',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    allTask: builder.query({
      query: ({ startDate = '2000-01-01', endDate = '2222-01-01' }) => {
        return {
          url: `/tasks?startDate=${startDate}&endDate=${endDate}`,
          method: 'GET',
          headers: { Authorization: `Bearer ${jwt()}` },
        };
      },
      providesTags: ['tasks'],
    }),
    addTask: builder.mutation({
      query: body => ({
        url: '/tasks',
        method: 'POST',
        body,
        headers: { Authorization: `Bearer ${jwt()}` },
      }),
      invalidatesTags: ['tasks'],
    }),
    updateTaskById: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body,
        headers: { Authorization: `Bearer ${jwt()}` },
      }),
      invalidatesTags: ['tasks'],
    }),
    updateTaskPropertiesById: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body,
        headers: { Authorization: `Bearer ${jwt()}` },
      }),
      invalidatesTags: ['tasks'],
    }),
    deleteTaskById: builder.mutation({
      query: id => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${jwt()}` },
      }),
      invalidatesTags: ['tasks'],
    }),
  }),
});

export const {
  useAllTaskQuery,
  useAddTaskMutation,
  useDeleteTaskByIdMutation,
  useUpdateTaskByIdMutation,
  useUpdateTaskPropertiesByIdMutation,
} = taskUtils;

export default taskUtils;
