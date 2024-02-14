import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/main';
import { IValidate } from '@models';

export interface mainAppState {
  slide: boolean;
  data: IValidate | undefined;
}

const initialState: mainAppState = {
  slide: false,
  data: undefined,
};

export const mainAppSlice = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    showMainSlide: (state, action: PayloadAction<boolean>) => {
      state.slide = action.payload;
    },
    dataMain: (state, action: PayloadAction<IValidate>) => {
      state.data = action.payload;
    },
  },
});

export const { showMainSlide, dataMain } = mainAppSlice.actions;

export const selectMainSlide = (state: RootState) => state.mainApp.slide;
export const selectMainData = (state: RootState) => state.mainApp.data;

export default mainAppSlice.reducer;
