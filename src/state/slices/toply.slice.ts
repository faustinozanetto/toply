import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@state/store';
import { SpotifyTrackType, ToplyStateType } from '@typedefs/toply.typesdefs';

const initialState: ToplyStateType = {
  topSongs: [],
};

export const toplySlice = createSlice({
  initialState,
  name: 'toply',
  reducers: {
    setTopSongs: (state, action: PayloadAction<SpotifyTrackType[]>) => {
      Object.assign(state, { topSongs: action.payload });
    },
  },
});

export const { setTopSongs } = toplySlice.actions;

export const selectTopSongs = (state: RootState) => state.topSongs;
