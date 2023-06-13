import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, jwt } from './apiParams';


const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getAllFeedbacks: builder.query({
      query: () => ({
        url: '/reviews',
        method: 'GET',
        headers: { Authorization: `Bearer ${jwt()}` },
      }),
    }),
    getMyFeedbacks: builder.query({
      query: () => ({
        url: '/reviews/my-reviews',
        method: 'GET',
        headers: { Authorization: `Bearer ${jwt()}` },
        // params: { userId: myUserId },
      }),
    }),
    createFeedback: builder.mutation({
      query: body => ({
        url: '/reviews/my-reviews',
        method: 'POST',
        body,
        headers: { Authorization: `Bearer ${jwt()}` },
      }),
    }),
    updateFeedback: builder.mutation({
      query: ({ id, body }) => ({
        url: `/reviews/${id}`,
        method: 'PATCH',
        body,
        headers: { Authorization: `Bearer ${jwt()}` },
      }),
    }),

    deleteFeedback: builder.mutation({
      query: id => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${jwt()}` },
      }),
    }),
  }),
});

export const {
  useGetAllFeedbacksQuery,
  useGetMyFeedbacksQuery,
  useCreateFeedbackMutation,
  useUpdateFeedbackMutation,
  useDeleteFeedbackMutation,
} = feedbackApi;

export default feedbackApi;
