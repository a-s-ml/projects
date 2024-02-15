import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/main';
import { IValidate } from '@models';

export interface mainAppState {
  mainSlide: boolean;
  mainType: string;
  mainData: IValidate | undefined;
}

const initialState: mainAppState = {
  mainSlide: false,
  mainType: '',
  mainData: undefined,
};

export const mainAppSlice = createSlice({
  name: 'mainApp',
  initialState,
  reducers: {
    showMainSlide: (state, action: PayloadAction<boolean>) => {
      state.mainSlide = action.payload;
    },
    typeMain: (state, action: PayloadAction<string>) => {
      state.mainType = action.payload;
    },
    dataMain: (state, action: PayloadAction<IValidate>) => {
      state.mainData = action.payload;
    },
  },
});

export const { showMainSlide, typeMain, dataMain } = mainAppSlice.actions;

export const selectMainSlide = (state: RootState) => state.mainApp.mainSlide;
export const selectMainData = (state: RootState) => state.mainApp.mainData;
export const selectMainType = (state: RootState) => state.mainApp.mainType;

export default mainAppSlice.reducer;
