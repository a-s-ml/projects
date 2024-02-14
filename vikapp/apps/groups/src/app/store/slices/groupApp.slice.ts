import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/main';

export interface groupAppState {
  slide: boolean;
  type: string;
  group: bigint;
}

const initialState: groupAppState = {
  slide: false,
  type: '',
  group: 0n,
};

export const groupAppSlice = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    showGroupSlide: (state, action: PayloadAction<boolean>) => {
      state.slide = action.payload;
    },
    typeGroup: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    dataGroup: (state, action: PayloadAction<bigint>) => {
      state.group = action.payload;
    },
  },
});

export const { showGroupSlide, typeGroup, dataGroup } = groupAppSlice.actions;

export const selectGroupSlide = (state: RootState) => state.mainApp.slide;
export const selectGroupData = (state: RootState) => state.mainApp.data;
export const selectGroupType = (state: RootState) => state.mainApp.type;

export default groupAppSlice.reducer;
