import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface slideDataState {
  prevType: string;
  type: string;
  level: number;
}

export interface slideState {
  show: boolean;
  user: number;
  group: bigint;
  patch: string[];
  data: slideDataState;
}

const initialState: slideState = {
  show: false,
  user: 0,
  group: 0n,
  patch: ["main"],
  data: {
    prevType: "",
    type: "main",
    level: 0,
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
    groupSlide: (state, action: PayloadAction<bigint>) => {
      state.group = action.payload;
    },
    addPatchSlide: (state, action: PayloadAction<string>) => {
      state.patch.push(action.payload);
    },
    removePatchSlide: (state, action: PayloadAction<number>) => {
      state.patch = state.patch.splice(action.payload, 1).concat();
    },
    dataSlide: (state, action: PayloadAction<slideDataState>) => {
      state.data = action.payload;
    },
    dataTypeSlide: (state, action: PayloadAction<string>) => {
      state.data.type = action.payload;
    },
    dataPrevTypeSlide: (state, action: PayloadAction<string>) => {
      state.data.prevType = action.payload;
    },
    dataLevelSlide: (state, action: PayloadAction<number>) => {
      state.data.level = action.payload;
    },
  },
});

export const {
  showSlide,
  dataSlide,
  userSlide,
  groupSlide,
  dataTypeSlide,
  dataLevelSlide,
  dataPrevTypeSlide,
  addPatchSlide,
  removePatchSlide,
} = slideSlice.actions;

export const selectSlide = (state: RootState) => state.slide.show;
export const selectSlideUser = (state: RootState) => state.slide.user;
export const selectSlideGroup = (state: RootState) => state.slide.group;
export const selectSlideData = (state: RootState) => state.slide.data;
export const selectSlidePatch = (state: RootState) => state.slide.patch;
export const selectSlideTypeData = (state: RootState) => state.slide.data.type;
export const selectSlidePrevTypeData = (state: RootState) =>
  state.slide.data.prevType;
export const selectSlideLevelData = (state: RootState) =>
  state.slide.data.level;

export default slideSlice.reducer;
