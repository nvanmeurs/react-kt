import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction
} from '@reduxjs/toolkit';

import { counterSlice } from './application-state/slice';

export const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice.reducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
