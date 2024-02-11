import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./slices/slide.slice";
import typeReducer from "./slices/type.slice";
import periodReducer from "./slices/period.slice";
import questionReducer from "./slices/question.slice";
import categoryReducer from "./slices/category.slice";
import { vikApi } from "@api/vik";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    slide: slideReducer,
    category: categoryReducer,
    question: questionReducer,
    type: typeReducer,
    period: periodReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vikApi.middleware)
});
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
