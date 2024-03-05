import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { IValidate } from '@models';
import { QuestionRootState } from '..'; 

export interface IAddQuestion {
  text: string;
  category: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerright: number;
}

export interface questionAppState {
  questionSlide: boolean;
  questionType: string;
  questionData: IValidate | undefined;
  addQuestion: IAddQuestion;
}

const initialState: questionAppState = {
  questionSlide: false,
  questionType: '',
  questionData: undefined,
  addQuestion: {
    text: '',
    category: 0,
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
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
    getQuestionAnswerOne: (state, action: PayloadAction<string>) => {
      state.addQuestion.answer1 = action.payload;
    },
    getQuestionAnswerTwo: (state, action: PayloadAction<string>) => {
      state.addQuestion.answer2 = action.payload;
    },
    getQuestionAnswerThree: (state, action: PayloadAction<string>) => {
      state.addQuestion.answer3 = action.payload;
    },
    getQuestionAnswerFour: (state, action: PayloadAction<string>) => {
      state.addQuestion.answer4 = action.payload;
    },
    getQuestionAnswerright: (state, action: PayloadAction<number>) => {
      state.addQuestion.answerright = action.payload;
    },
    getQuestionDefault: (state, action: PayloadAction<string>) => {
      state.addQuestion.text = '';
      state.addQuestion.category = 0;
      state.addQuestion.answer1 = '';
      state.addQuestion.answer2 = '';
      state.addQuestion.answer3 = '';
      state.addQuestion.answer4 = '';
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
  getQuestionAnswerOne,
  getQuestionAnswerTwo,
  getQuestionAnswerThree,
  getQuestionAnswerFour,
  getQuestionAnswerright,
  getQuestionDefault,
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
export const selectQuestionAnswerOne = (state: QuestionRootState) =>
  state.questionApp.addQuestion.answer1;
export const selectQuestionAnswerTwo = (state: QuestionRootState) =>
  state.questionApp.addQuestion.answer2;
export const selectQuestionAnswerThree = (state: QuestionRootState) =>
  state.questionApp.addQuestion.answer3;
export const selectQuestionAnswerFour = (state: QuestionRootState) =>
  state.questionApp.addQuestion.answer4;
export const selectQuestionAnswerright = (state: QuestionRootState) =>
  state.questionApp.addQuestion.answerright;
export const selectQuestion = (state: QuestionRootState) =>
  state.questionApp.addQuestion;

export default questionAppSlice.reducer; 
