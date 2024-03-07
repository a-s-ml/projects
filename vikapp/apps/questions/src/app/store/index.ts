import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { globalApi } from '@api/global';
import questionAppSlice from '@slice/questions';  

export const storeQuestion = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    questionApp: questionAppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

export type QuestionDispatch = typeof storeQuestion.dispatch;
export type QuestionRootState = ReturnType<typeof storeQuestion.getState>;

export const useQuestionDispatch = () => useDispatch<QuestionDispatch>();
export const useQuestionSelector: TypedUseSelectorHook<QuestionRootState> = useSelector;
