import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IValidate } from '@models';
import { QuestionRootState } from '@store/questions';

export interface IAnswers {
  id: number;
  name: string;
  value: string;
}

export interface IAddQuestion {
  text: string;
  category: number;
  answers: IAnswers[];
  answerright: number;
}

export interface questionAppState {
  questionSlide: boolean;
  questionType: string;
  questionData: IValidate | undefined;
  addQuestion: IAddQuestion;
}

export const initialAnswers = [
  { id: 1, name: 'answer1', value: '' },
  { id: 2, name: 'answer2', value: '' },
  { id: 3, name: 'answer3', value: '' },
  { id: 4, name: 'answer4', value: '' },
];

const initialState: questionAppState = {
  questionSlide: false,
  questionType: '',
  questionData: undefined,
  addQuestion: {
    text: '',
    category: 0,
    answers: initialAnswers,
    answerright: 0,
  },
};

export const questionAppSlice = createSlice({
  name: 'questionApp',
  initialState,
  reducers: {
    showQuestionSlide: (state, action: PayloadAction<boolean>) => {
      state.questionSlide = action.payload;
    },
    typeQuestion: (state, action: PayloadAction<string>) => {
      state.questionType = action.payload;
    },
    dataQuestion: (state, action: PayloadAction<IValidate>) => {
      state.questionData = action.payload;
    },
    getQuestionText: (state, action: PayloadAction<string>) => {
      state.addQuestion.text = action.payload;
    },
    getQuestionCategory: (state, action: PayloadAction<number>) => {
      state.addQuestion.category = action.payload;
    },
    getQuestionAnswers: (state, action: PayloadAction<IAnswers[]>) => {
      state.addQuestion.answers = action.payload;
    },
    getQuestionAnswerright: (state, action: PayloadAction<number>) => {
      state.addQuestion.answerright = action.payload;
    },
    getQuestionDefault: (state) => {
      state.addQuestion.text = '';
      state.addQuestion.category = 0;
      state.addQuestion.answers = initialAnswers;
      state.addQuestion.answerright = 0;
    },
  },
});

export const {
  showQuestionSlide,
  typeQuestion,
  dataQuestion,
  getQuestionText,
  getQuestionCategory,
  getQuestionAnswerright,
  getQuestionDefault,
  getQuestionAnswers,
} = questionAppSlice.actions;

export const selectQuestionSlide = (state: QuestionRootState) =>
  state.questionApp.questionSlide;
export const selectQuestionData = (state: QuestionRootState) =>
  state.questionApp.questionData;
export const selectQuestionType = (state: QuestionRootState) =>
  state.questionApp.questionType;
export const selectQuestionText = (state: QuestionRootState) =>
  state.questionApp.addQuestion.text;
export const selectQuestionCategory = (state: QuestionRootState) =>
  state.questionApp.addQuestion.category;
export const selectQuestionAnswerright = (state: QuestionRootState) =>
  state.questionApp.addQuestion.answerright;
export const selectQuestion = (state: QuestionRootState) =>
  state.questionApp.addQuestion;

export default questionAppSlice.reducer;
