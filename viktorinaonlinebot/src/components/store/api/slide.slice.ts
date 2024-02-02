import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface slideDataState {
  type: string;
  value: number | bigint;
}

export interface slideState {
  user: number;
  show: boolean;
  data: slideDataState;
}

const initialState: slideState = {
  user: 0,
  show: false,
  data: {
    type: "",
    value: 0,
  },
};
const tg = window.Telegram.WebApp;

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    showSlide: (state, action: PayloadAction<boolean>) => {
      tg.BackButton.show();
      tg.MainButton.hide();
      state.show = action.payload;
    },
    userSlide: (state, action: PayloadAction<number>) => {
      state.user = action.payload;
    },
    dataSlide: (state, action: PayloadAction<slideDataState>) => {
      state.data = action.payload;
    },
    dataTypeSlide: (state, action: PayloadAction<string>) => {
      state.data.type = action.payload;
    },
    dataValueSlide: (state, action: PayloadAction<number | bigint>) => {
      state.data.value = action.payload;
    },
  },
});

export const { showSlide, dataSlide, userSlide, dataTypeSlide } = slideSlice.actions;

export const selectSlide = (state: RootState) => state.slide.show;
export const selectSlideUser = (state: RootState) => state.slide.user;
export const selectSlideData = (state: RootState) => state.slide.data;
export const selectSlideTypeData = (state: RootState) => state.slide.data.type;

export default slideSlice.reducer;
