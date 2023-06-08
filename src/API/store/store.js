import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authenticationApi from 'API/auth-operations';
import { userInfoSlice } from 'API/userSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    currentUser: userInfoSlice.reducer,
  })
);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authenticationApi.middleware),
});

export let persistor = persistStore(store);
