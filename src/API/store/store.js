import { configureStore } from '@reduxjs/toolkit';
import authenticationApi from 'API/auth-operations';

export const store = configureStore({
  reducer: { [authenticationApi.reducerPath]: authenticationApi.reducer },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authenticationApi.middleware),
});
