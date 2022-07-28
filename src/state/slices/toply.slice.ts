import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@state/store';
import {
  SpotifyTrackType,
  ToplyDataTimeStapEnum,
  ToplyStateType,
} from '@typedefs/toply.typesdefs';

const initialState: ToplyStateType = {
  topSongs: [],
  topSongsLoading: true,
  timeSpan: ToplyDataTimeStapEnum.MONTH,
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
  },
});

export const { setTopSongs, setTopSongsLoading, setTimeSpan } =
  toplySlice.actions;

export const selectTopSongs = (state: RootState) => state.topSongs;
export const selectTopSongsLoading = (state: RootState) =>
  state.topSongsLoading;
export const selectTimeSpan = (state: RootState) => state.timeSpan;
