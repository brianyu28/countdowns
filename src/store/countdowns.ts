import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export interface CountdownDetails {
  name: string,
  time: number
}

type CountdownsState = {
  now: number,
  countdowns: CountdownDetails[];
}

const initialState: CountdownsState = {
  now: new Date().getTime(),
  countdowns: []
};

const countdownsSlice = createSlice({
  name: 'countdowns',
  initialState,
  reducers: {
    addCountdown(state, action: PayloadAction<CountdownDetails>) {
      const { name, time } = action.payload;
      state.countdowns.push({ name, time });
    },
    deleteCountdown(state, action: PayloadAction<{index: number}>) {
      const { index } = action.payload;
       state.countdowns.splice(index, 1);
    },
    updateCountdownName(state, action: PayloadAction<{index: number, name: string}>) {
      const { index, name } = action.payload;
      state.countdowns[index].name = name;
    },
    updateCountdownDate(state, action: PayloadAction<{index: number, time: number}>) {
      const { index, time } = action.payload;
      state.countdowns[index].time = time;
    },
    updateNow(state, action: PayloadAction<{now: number}>) {
      const { now } = action.payload;
      state.now = now;
    },
  }
});

export const { addCountdown, deleteCountdown, updateCountdownName, updateCountdownDate, updateNow } = countdownsSlice.actions;

export const selectCountdowns = (state: RootState): CountdownDetails[] => state.countdowns.countdowns;
export const selectNow = (state: RootState): number => state.countdowns.now;

export default countdownsSlice.reducer;