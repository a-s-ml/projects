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

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    showSlide: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    dataSlide: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { showSlide, dataSlide } = slideSlice.actions;

export const selectSlide = (state: RootState) => state.slide.show;

export default slideSlice.reducer;
