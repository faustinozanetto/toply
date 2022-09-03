import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/store';
import type { SpotifyTrackType, ToplyStateType } from '@typedefs/toply.typesdefs';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';

const initialState: ToplyStateType = {
  topSongs: [],
  topSongsLoading: true,
  timeSpan: ToplyDataTimeStapEnum.MONTH,
  backgroundColor: 'linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))',
};

export const toplySlice = createSlice({
  initialState,
  name: 'toply',
  reducers: {
    setTopSongs: (state, action: PayloadAction<SpotifyTrackType[]>) => {
      Object.assign(state, { topSongs: action.payload });
    },
    setTopSongsLoading: (state, action: PayloadAction<boolean>) => {
      Object.assign(state, { topSongsLoading: action.payload });
    },
    setTimeSpan: (state, action: PayloadAction<ToplyDataTimeStapEnum>) => {
      Object.assign(state, { timeSpan: action.payload });
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      Object.assign(state, { backgroundColor: action.payload });
    },
  },
});

export const { setTopSongs, setTopSongsLoading, setTimeSpan, setBackgroundColor } = toplySlice.actions;

export const selectTopSongs = (state: RootState) => state.topSongs;
export const selectTopSongsLoading = (state: RootState) => state.topSongsLoading;
export const selectTimeSpan = (state: RootState) => state.timeSpan;
export const selectBackgroundColor = (state: RootState) => state.backgroundColor;
