import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateAddQuestion } from '..';

export interface addQuestionAppState {
  text: string;
  category: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerright: number;
}

const initialState: addQuestionAppState = {
  text: '',
  category: 0,
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answerright: 0,
};

export const addQuestionAppSlice = createSlice({
  name: 'addQuestionApp',
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
      state.text = '';
      state.category = 0;
      state.answer1 = '';
      state.answer2 = '';
      state.answer3 = '';
      state.answer4 = '';
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
} = addQuestionAppSlice.actions;

export const selectQuestionText = (state: RootStateAddQuestion) =>
  state.addQuestionApp.text;
export const selectQuestionCategory = (state: RootStateAddQuestion) =>
  state.addQuestionApp.category;
export const selectQuestionAnswerOne = (state: RootStateAddQuestion) =>
  state.addQuestionApp.answer1;
export const selectQuestionAnswerTwo = (state: RootStateAddQuestion) =>
  state.addQuestionApp.answer2;
export const selectQuestionAnswerThree = (state: RootStateAddQuestion) =>
  state.addQuestionApp.answer3;
export const selectQuestionAnswerFour = (state: RootStateAddQuestion) =>
  state.addQuestionApp.answer4;
export const selectQuestionAnswerright = (state: RootStateAddQuestion) =>
  state.addQuestionApp.answerright;
export const selectQuestion = (state: RootStateAddQuestion) =>
  state.addQuestionApp;

export default addQuestionAppSlice.reducer;
