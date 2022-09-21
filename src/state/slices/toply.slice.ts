import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, current } from '@reduxjs/toolkit';
import type { RootState } from '@state/store';
import type { SpotifyTrackType, ToplyStateType } from '@typedefs/toply.typesdefs';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';

const initialState: ToplyStateType = {
  songs: new Map<ToplyDataTimeStapEnum, SpotifyTrackType[]>(),
  songsLoading: true,
  selectedSong: {},
  timeSpan: ToplyDataTimeStapEnum.MONTH,
  backgroundColor: 'linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))',
};

export const toplySlice = createSlice({
  initialState,
  name: 'toply',
  reducers: {
    setSongs: (state, action: PayloadAction<{ songs: SpotifyTrackType[]; timeSpan: ToplyDataTimeStapEnum }>) => {
      const updatedSongs = state.songs.set(action.payload.timeSpan, action.payload.songs);
      Object.assign(state, { songs: updatedSongs });
    },
    setSongsLoading: (state, action: PayloadAction<boolean>) => {
      Object.assign(state, { songsLoading: action.payload });
      console.log(`Songs Loading: ${current(state).songsLoading}`);
    },
    setSelectedSong: (state, action: PayloadAction<SpotifyTrackType>) => {
      state.selectedSong = action.payload;
    },
    setTimeSpan: (state, action: PayloadAction<ToplyDataTimeStapEnum>) => {
      state.timeSpan = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const { setSongs, setSongsLoading, setTimeSpan, setBackgroundColor, setSelectedSong } = toplySlice.actions;

export const selectSongs = (state: RootState) => state.songs;
export const selectTopSongsLoading = (state: RootState) => state.songsLoading;
export const selectTimeSpan = (state: RootState) => state.timeSpan;
export const selectBackgroundColor = (state: RootState) => state.backgroundColor;
export const selectSelectedSong = (state: RootState) => state.selectedSong;
