import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/store';
import type { SpotifyArtistType, TopArtistsStateType, ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';

const initialState: TopArtistsStateType = {
  artists: new Map<ToplyDataTimeStapEnum, SpotifyArtistType[]>(),
  artistsLoading: true,
  selectedArtist: null,
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
    setSelectedArtist: (state, action: PayloadAction<SpotifyArtistType>) => {
      state.selectedArtist = action.payload;
    },
  },
});

export const { setArtists, setArtistsLoading, setSelectedArtist } = topArtistsSlice.actions;

export const selectArtists = (state: RootState) => state.topArtists.artists;
export const selectTopArtistsLoading = (state: RootState) => state.topArtists.artistsLoading;
export const selectSelectedArtist = (state: RootState) => state.topArtists.selectedArtist;
