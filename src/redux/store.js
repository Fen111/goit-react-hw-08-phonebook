import { configureStore } from '@reduxjs/toolkit';
import { filter } from './reducers';
import logger from 'redux-logger';
import { contactsApi } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    logger,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
