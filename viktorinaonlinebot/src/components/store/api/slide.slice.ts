import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface slideState {
  show: boolean;
  user: number;
  group: bigint;
  patch: string[];
  page: string;
}

const initialState: slideState = {
  show: false,
  user: 0,
  group: 0n,
  patch: ["main"],
  page: "main",
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    showSlide: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    userSlide: (state, action: PayloadAction<number>) => {
      state.user = action.payload;
    },
    groupSlide: (state, action: PayloadAction<bigint>) => {
      state.group = action.payload;
    },
    addPatchSlide: (state, action: PayloadAction<string>) => {
      state.patch.push(action.payload);
      state.page = state.patch[state.patch.length - 1];
    },
    removePatchSlide: (state, action: PayloadAction<string>) => {
      console.log("action.payload = ", action.payload);
      state.patch = state.patch.filter((i) => i !== action.payload);
      state.page = state.patch[state.patch.length - 1];
    },
    backPatchSlide: (state, action: PayloadAction<number>) => {
      state.page = state.patch[state.patch.length - action.payload];
    },
  },
});

export const {
  showSlide,
  userSlide,
  groupSlide,
  addPatchSlide,
  removePatchSlide,
  backPatchSlide,
} = slideSlice.actions;

export const selectSlide = (state: RootState) => state.slide.show;
export const selectSlideUser = (state: RootState) => state.slide.user;
export const selectSlideGroup = (state: RootState) => state.slide.group;
export const selectSlidePatch = (state: RootState) => state.slide.patch;
export const selectSlidePage = (state: RootState) => state.slide.page;

export default slideSlice.reducer;
