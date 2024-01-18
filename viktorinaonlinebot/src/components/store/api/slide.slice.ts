import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface slideState {
  show: boolean;
  data: string;
}

const initialState: slideState = {
  show: false,
  data: "",
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
    dataSlide: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { showSlide, dataSlide } = slideSlice.actions;

export const selectSlide = (state: RootState) => state.slide.show;
export const selectSlideData = (state: RootState) => state.slide.data;

export default slideSlice.reducer;
