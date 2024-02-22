import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IValidate } from '@models';
import { QuizRootState } from '..';

export interface questionAppState {
  quizSlide: boolean;
  quizType: string;
  quizData: IValidate | undefined;
}

const initialState: questionAppState = {
  quizSlide: false,
  quizType: '',
  quizData: undefined,
};

export const quizAppSlice = createSlice({
  name: 'quizApp',
  initialState,
  reducers: {
    showQuizSlide: (state, action: PayloadAction<boolean>) => {
      state.quizSlide = action.payload;
    },
    typeQuiz: (state, action: PayloadAction<string>) => {
      state.quizType = action.payload;
    },
    dataQuiz: (state, action: PayloadAction<IValidate>) => {
      state.quizData = action.payload;
    },
  },
});

export const { dataQuiz, showQuizSlide, typeQuiz } = quizAppSlice.actions;

export const selectQuizSlide = (state: QuizRootState) =>
  state.quizApp.quizSlide;
export const selectQuizData = (state: QuizRootState) => state.quizApp.quizData;
export const selectQuizType = (state: QuizRootState) => state.quizApp.quizType;

export default quizAppSlice.reducer;
