import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateGroup } from '@store/groups';

export interface groupAppState {
  slide: boolean;
  type: string;
  group: number;
}

const initialState: groupAppState = {
  slide: false,
  type: '',
  group: 10,
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
    dataGroup: (state, action: PayloadAction<number>) => {
      state.group = action.payload;
    },
  },
});

export const { showGroupSlide, typeGroup, dataGroup } = groupAppSlice.actions;

export const selectGroupSlide = (state: RootStateGroup) => state.groupApp.slide;
export const selectGroupData = (state: RootStateGroup) => state.groupApp.group;
export const selectGroupType = (state: RootStateGroup) => state.groupApp.type;

export default groupAppSlice.reducer;
