import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { globalApi } from '@api/global';
import addQuestionAppSlice from './slices/addQuestionApp.slice';

export const storeAddQuestion = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    addQuestionApp: addQuestionAppSlice,
  },
});

export type addQuestionDispatch = typeof storeAddQuestion.dispatch;
export type RootStateAddQuestion = ReturnType<typeof storeAddQuestion.getState>;

export const useAddQuestionDispatch = () => useDispatch<addQuestionDispatch>();
export const useAddQuestionSelector: TypedUseSelectorHook<RootStateAddQuestion> = useSelector;
