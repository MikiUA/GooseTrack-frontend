import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authenticationApi from 'API/auth-operations';
import taskUtils from 'API/taskUtils';
import userInfo from 'API/userInfo';
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
const rootReducer = combineReducers({
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [taskUtils.reducerPath]: taskUtils.reducer,
  [userInfo.reducerPath]: userInfo.reducer,
  currentUser: persistReducer(persistConfig, userInfoSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authenticationApi.middleware,
      userInfo.middleware,
      taskUtils.middleware
    ),
});

export let persistor = persistStore(store);
