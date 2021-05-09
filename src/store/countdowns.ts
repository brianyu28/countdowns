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

// Get initial countdowns from storage if they exist
const storageCountdowns = localStorage.getItem('countdowns');
const initialCountdowns = storageCountdowns !== null ? JSON.parse(storageCountdowns) : [];

// Check URL parameters for an initial countdown to add
const searchParams = new URLSearchParams(window.location.search);
const paramName = searchParams.get('name');
const paramTime = searchParams.get('time');
if (paramName && paramTime) {
  const paramTimeNum = parseInt(paramTime);
  if (!isNaN(paramTimeNum)) {
    const exists = initialCountdowns.some((countdown: CountdownDetails) => {
      return countdown.name === paramName && countdown.time === paramTimeNum
    });
    console.log(exists);
    if (!exists) {
      initialCountdowns.push({ name: paramName, time: paramTimeNum });
    }
  }
}

const initialState: CountdownsState = {
  now: new Date().getTime(),
  countdowns: initialCountdowns,
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
    reorderCountdown(state, action: PayloadAction<{start: number, end: number}>) {
      const { start, end } = action.payload;
      const result = Array.from(state.countdowns);
      const [removed] = result.splice(start, 1);
      result.splice(end, 0, removed);
      state.countdowns = result;
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

export const { addCountdown, deleteCountdown, reorderCountdown, updateCountdownName, updateCountdownDate, updateNow } = countdownsSlice.actions;

export const selectCountdowns = (state: RootState): CountdownDetails[] => state.countdowns.countdowns;
export const selectNow = (state: RootState): number => state.countdowns.now;

export default countdownsSlice.reducer;