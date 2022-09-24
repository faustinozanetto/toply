import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

import { appSlice } from './slices/app.slice';
import { topArtistsSlice } from './slices/top-artists.slice';
import { topSongsSlice } from './slices/top-songs.slice';

enableMapSet();

const reducers = combineReducers({
  app: appSlice.reducer,
  topSongs: topSongsSlice.reducer,
  topArtists: topArtistsSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
