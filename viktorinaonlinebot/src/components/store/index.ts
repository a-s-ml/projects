import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./api/modal.slice";
import slideReducer from "./api/slide.slice";
import typesReducer from "./api/types.slice";
import timesReducer from "./api/times.slice";
import categoriesReducer from "./api/categories.slice";
import chatReducer from "./api/chat.slice";
import { vikApi } from "./api/vik.api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    modal: modalReducer,
    slide: slideReducer,
    chat: chatReducer,
    types: typesReducer,
    times: timesReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vikApi.middleware)
});
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
