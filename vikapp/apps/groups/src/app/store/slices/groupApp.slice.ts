import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateGroup } from '@store/groups';

export interface groupAppState {
  groupId: number;
}

const initialState: groupAppState = {
  groupId: 10,
};

export const groupAppSlice = createSlice({
  name: 'groupApp',
  initialState,
  reducers: {
    dataGroup: (state, action: PayloadAction<number>) => {
      state.groupId = action.payload;
    },
  },
});

export const { dataGroup } = groupAppSlice.actions;

export const selectGroupData = (state: RootStateGroup) =>
  state.groupApp.groupId;

export default groupAppSlice.reducer;
