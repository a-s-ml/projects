import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/main';
import { IValidate } from '@models';

export interface mainAppState {
  mainData: IValidate | undefined;
}

const initialState: mainAppState = {
  mainData: undefined,
};

export const mainAppSlice = createSlice({
  name: 'mainApp',
  initialState,
  reducers: {
    dataMain: (state, action: PayloadAction<IValidate>) => {
      state.mainData = action.payload;
    },
  },
});

export const { dataMain } = mainAppSlice.actions;

export const selectMainData = (state: RootState) => state.mainApp.mainData;

export default mainAppSlice.reducer;
