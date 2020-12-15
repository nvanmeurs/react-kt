import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    resetCounter(state) {
      state.value = 0;
    },
    incrementCounter(state) {
      state.value++;
    },
    decrementCounter(state) {
      state.value--;
    },
    setCounter(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const {
  resetCounter,
  incrementCounter,
  decrementCounter,
  setCounter,
} = counterSlice.actions;

export function incrementCounterDelayed(delay: number = 1500): AppThunk {
  return (dispatch) => {
    setTimeout(() => dispatch(incrementCounter()), delay);
  };
}

export const selectCounter = (state: RootState) => state.counter;
export const selectCounterValue = createSelector(
  selectCounter,
  (state) => state.value
);
