import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { globalApi } from '@api/global';
import quizAppSlice from '@slice/quiz'; 

export const storeQuiz = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    quizApp: quizAppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

export type QuizDispatch = typeof storeQuiz.dispatch;
export type QuizRootState = ReturnType<typeof storeQuiz.getState>;

export const useQuizDispatch = () => useDispatch<QuizDispatch>();
export const useQuizSelector: TypedUseSelectorHook<QuizRootState> = useSelector;
