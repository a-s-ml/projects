import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface slideState {
  user: number;
  show: boolean;
  type: string;
  level: number;
  group: bigint;
}

const initialState: slideState = {
  show: false,
  type: "",
  level: 0,
  user: 0,
  group: 0n,
};
const tg = window.Telegram.WebApp;

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    userSlide: (state, action: PayloadAction<number>) => {
      state.user = action.payload;
    },
    dataSlide: (state, action: PayloadAction<slideState>) => {
      state = action.payload;
    },
    showSlide: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    dataTypeSlide: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    levelSlide: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    nextLevelSlide: (state, action: PayloadAction<boolean>) => {
      state.show = !action.payload;
      state.level = state.level + 1;
      setTimeout(() => {
        state.show = true;
      }, 250);
    },
    prevLevelSlide: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
      if (state.level >= 1) {
        state.level = state.level - 1;
        setTimeout(() => {
          state.show = true;
        }, 250);
      }
    },
    groupSlide: (state, action: PayloadAction<bigint>) => {
      state.group = action.payload;
    },
  },
});

export const {
  showSlide,
  dataSlide,
  userSlide,
  dataTypeSlide,
  groupSlide,
  levelSlide,
  prevLevelSlide,
  nextLevelSlide
} = slideSlice.actions;

export const selectSlideUser = (state: RootState) => state.slide.user;
export const selectSlideData = (state: RootState) => state.slide;
export const selectSlide = (state: RootState) => state.slide.show;
export const selectSlideType = (state: RootState) => state.slide.type;
export const selectSlideLevel = (state: RootState) => state.slide.level;
export const selectSlideGroup = (state: RootState) => state.slide.group;

export default slideSlice.reducer;
