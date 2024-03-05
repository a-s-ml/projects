import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IValidate } from '@models';
import { QuizRootState } from '..';

export interface quizAppState {
  quizData: IValidate | undefined;
}

const initialState: quizAppState = {
  quizData: undefined,
};

export const quizAppSlice = createSlice({
  name: 'quizApp',
  initialState,
  reducers: {
    dataQuiz: (state, action: PayloadAction<IValidate>) => {
      state.quizData = action.payload;
    },
  },
});

export const { dataQuiz } = quizAppSlice.actions;

export const selectQuizData = (state: QuizRootState) => state.quizApp.quizData;

export default quizAppSlice.reducer;
