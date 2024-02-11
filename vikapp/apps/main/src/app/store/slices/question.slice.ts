import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/main";

export interface questionState {
  text: string;
  category: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerright: number;
}

const initialState: questionState = {
  text: "",
  category: 0,
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answerright: 0,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    getQuestionText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    getQuestionCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    getQuestionAnswerOne: (state, action: PayloadAction<string>) => {
      state.answer1 = action.payload;
    },
    getQuestionAnswerTwo: (state, action: PayloadAction<string>) => {
      state.answer2 = action.payload;
    },
    getQuestionAnswerThree: (state, action: PayloadAction<string>) => {
      state.answer3 = action.payload;
    },
    getQuestionAnswerFour: (state, action: PayloadAction<string>) => {
      state.answer4 = action.payload;
    },
    getQuestionAnswerright: (state, action: PayloadAction<number>) => {
      state.answerright = action.payload;
    },
    getQuestionDefault: (state, action: PayloadAction<string>) => {
      state.text = "";
      state.category = 0;
      state.answer1 = "";
      state.answer2 = "";
      state.answer3 = "";
      state.answer4 = "";
      state.answerright = 0;
    },
  },
});

export const {
  getQuestionText,
  getQuestionCategory,
  getQuestionAnswerOne,
  getQuestionAnswerTwo,
  getQuestionAnswerThree,
  getQuestionAnswerFour,
  getQuestionAnswerright,
  getQuestionDefault,
} = questionSlice.actions;

export const selectQuestionText = (state: RootState) => state.question.text;
export const selectQuestionCategory = (state: RootState) =>
  state.question.category;
export const selectQuestionAnswerOne = (state: RootState) =>
  state.question.answer1;
export const selectQuestionAnswerTwo = (state: RootState) =>
  state.question.answer2;
export const selectQuestionAnswerThree = (state: RootState) =>
  state.question.answer3;
export const selectQuestionAnswerFour = (state: RootState) =>
  state.question.answer4;
export const selectQuestionAnswerright = (state: RootState) =>
  state.question.answerright;
export const selectQuestion = (state: RootState) => state.question;

export default questionSlice.reducer;
