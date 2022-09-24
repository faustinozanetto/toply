import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/store';
import type { SpotifyArtistType, TopArtistsStateType } from '@typedefs/toply.typesdefs';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';

const initialState: TopArtistsStateType = {
  artists: new Map<ToplyDataTimeStapEnum, SpotifyArtistType[]>(),
  artistsLoading: true,
  selectedArtist: {},
  timeSpan: ToplyDataTimeStapEnum.MONTH,
};

export const topArtistsSlice = createSlice({
  initialState,
  name: 'topArtists',
  reducers: {
    setArtists: (state, action: PayloadAction<{ artists: SpotifyArtistType[]; timeSpan: ToplyDataTimeStapEnum }>) => {
      const updatedArtists = state.artists.set(action.payload.timeSpan, action.payload.artists);
      Object.assign(state, { artists: updatedArtists });
    },
    setArtistsLoading: (state, action: PayloadAction<boolean>) => {
      Object.assign(state, { artistsLoading: action.payload });
    },
    setSelectedArtists: (state, action: PayloadAction<Partial<SpotifyArtistType>>) => {
      state.selectedArtist = action.payload;
    },
    setArtistsTimeSpan: (state, action: PayloadAction<ToplyDataTimeStapEnum>) => {
      state.timeSpan = action.payload;
    },
  },
});

export const { setArtists, setArtistsLoading, setArtistsTimeSpan, setSelectedArtists } = topArtistsSlice.actions;

export const selectArtists = (state: RootState) => state.topArtists.artists;
export const selectTopArtistsLoading = (state: RootState) => state.topArtists.artistsLoading;
export const selectArtistsTimeSpan = (state: RootState) => state.topArtists.timeSpan;
export const selectSelectedArtist = (state: RootState) => state.topArtists.selectedArtist;
