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
    toggleShow: (state, action: PayloadAction<boolean>) => {
      tg.BackButton.show();
      state.show = !action.payload;
      setTimeout(() => {
        state.show = !action.payload;
      }, 2000);
    },
    showSlide: (state, action: PayloadAction<boolean>) => {
      tg.BackButton.show();
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
  },
});

export const { showSlide, dataSlide, userSlide, levelSlide, toggleShow } =
  slideSlice.actions;

export const selectSlide = (state: RootState) => state.slide.show;
export const selectSlideData = (state: RootState) => state.slide.data;

export default slideSlice.reducer;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
