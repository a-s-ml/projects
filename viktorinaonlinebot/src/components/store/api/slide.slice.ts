import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface slidaData {
  type: string; // 'none' | 'chat' | 'groups' | 'answers' | 'questions',
  chat: number;
  group: bigint;
  answer: number;
  question: number;
}

export interface slideState {
  user: number;
  show: boolean;
  level: number;
  data: slidaData;
}

const initialState: slideState = {
  user: 0,
  show: false,
  level: 0,
  data: {
    type: "none",
    chat: 0,
    group: 0n,
    answer: 0,
    question: 0,
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
    levelSlide: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    dataSlide: (state, action: PayloadAction<slidaData>) => {
      state.data = action.payload;
    },
    levelUpSlide: (state) => {
      dispatch(showSlide(false));
      state.level = state.level + 1;
      dispatch(showSlide(true));
    },
    levelDownSlide: (state) => {
      dispatch(showSlide(false));
      state.level = state.level - 1;
      dispatch(showSlide(true));
    },
  },
});

export const { showSlide, dataSlide, userSlide, levelSlide, levelUpSlide, levelDownSlide } =
  slideSlice.actions;

export const selectSlide = (state: RootState) => state.slide.show;
export const selectSlideData = (state: RootState) => state.slide.data;

export default slideSlice.reducer;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
