import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateGroup } from '@store/groups';

export interface groupAppState {
  groupSlide: boolean;
  groupType: string;
  groupId: number;
}

const initialState: groupAppState = {
  groupSlide: false,
  groupType: '',
  groupId: 10,
};

export const groupAppSlice = createSlice({
  name: 'groupApp',
  initialState,
  reducers: {
    showGroupSlide: (state, action: PayloadAction<boolean>) => {
      state.groupSlide = action.payload;
    },
    typeGroup: (state, action: PayloadAction<string>) => {
      state.groupType = action.payload;
    },
    dataGroup: (state, action: PayloadAction<number>) => {
      state.groupId = action.payload;
    },
  },
});

export const { showGroupSlide, typeGroup, dataGroup } = groupAppSlice.actions;

export const selectGroupSlide = (state: RootStateGroup) => state.groupApp.groupSlide;
export const selectGroupData = (state: RootStateGroup) => state.groupApp.groupId;
export const selectGroupType = (state: RootStateGroup) => state.groupApp.groupType;

export default groupAppSlice.reducer;
