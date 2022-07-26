import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { toplySlice } from './slices/toply.slice';

export const store = configureStore({
  reducer: toplySlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
