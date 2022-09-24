import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/store';
import type { AppStateType } from '@typedefs/toply.typesdefs';

const initialState: AppStateType = {
  backgroundColor: 'linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))',
};

export const appSlice = createSlice({
  initialState,
  name: 'toply',
  reducers: {
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const { setBackgroundColor } = appSlice.actions;

export const selectBackgroundColor = (state: RootState) => state.app.backgroundColor;
