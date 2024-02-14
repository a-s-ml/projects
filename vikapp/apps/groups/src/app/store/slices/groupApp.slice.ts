import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/groups';

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
  name: 'groupApp',
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

export const selectGroupSlide = (state: RootState) => state.groupApp.slide;
export const selectGroupData = (state: RootState) => state.groupApp.group;
export const selectGroupType = (state: RootState) => state.groupApp.type;

export default groupAppSlice.reducer;
