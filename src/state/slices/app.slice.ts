import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@state/store';
import type { AppStateType } from '@typedefs/toply.typesdefs';
import { ToplyDataTimeStapEnum, ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';

const initialState: AppStateType = {
  backgroundColor: 'linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))',
  topType: ToplyTopItemsEnum.SONGS,
  topTimeSpan: ToplyDataTimeStapEnum.MONTH,
};

export const appSlice = createSlice({
  initialState,
  name: 'toply',
  reducers: {
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    setTopType: (state, action: PayloadAction<ToplyTopItemsEnum>) => {
      state.topType = action.payload;
    },
    setTopTimeSpan: (state, action: PayloadAction<ToplyDataTimeStapEnum>) => {
      state.topTimeSpan = action.payload;
    },
  },
});

export const { setBackgroundColor, setTopType, setTopTimeSpan } = appSlice.actions;

export const selectBackgroundColor = (state: RootState) => state.app.backgroundColor;
export const selectTopType = (state: RootState) => state.app.topType;
export const selectTopTimeSpan = (state: RootState) => state.app.topTimeSpan;
