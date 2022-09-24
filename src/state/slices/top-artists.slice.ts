import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/store';
import type { SpotifyTrackType, TopSongsStateType } from '@typedefs/toply.typesdefs';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';

const initialState: TopSongsStateType = {
  songs: new Map<ToplyDataTimeStapEnum, SpotifyTrackType[]>(),
  songsLoading: true,
  selectedSong: {},
  timeSpan: ToplyDataTimeStapEnum.MONTH,
};

export const topSongsSlice = createSlice({
  initialState,
  name: 'topSongs',
  reducers: {
    setSongs: (state, action: PayloadAction<{ songs: SpotifyTrackType[]; timeSpan: ToplyDataTimeStapEnum }>) => {
      const updatedSongs = state.songs.set(action.payload.timeSpan, action.payload.songs);
      Object.assign(state, { songs: updatedSongs });
    },
    setSongsLoading: (state, action: PayloadAction<boolean>) => {
      Object.assign(state, { songsLoading: action.payload });
    },
    setSelectedSong: (state, action: PayloadAction<SpotifyTrackType>) => {
      state.selectedSong = action.payload;
    },
    setTimeSpan: (state, action: PayloadAction<ToplyDataTimeStapEnum>) => {
      state.timeSpan = action.payload;
    },
  },
});

export const { setSongs, setSongsLoading, setTimeSpan, setSelectedSong } = topSongsSlice.actions;

export const selectSongs = (state: RootState) => state.topSongs.songs;
export const selectTopSongsLoading = (state: RootState) => state.topSongs.songsLoading;
export const selectTimeSpan = (state: RootState) => state.topSongs.timeSpan;
export const selectSelectedSong = (state: RootState) => state.topSongs.selectedSong;
