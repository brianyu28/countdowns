import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import countdownsReducer from './countdowns';

const store = configureStore({
  reducer: {
    countdowns: countdownsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;