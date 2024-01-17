import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./api/modal.slice";
import slideReducer from "./api/slide.slice";
import typeReducer from "./api/type/type.slice";
import timeReducer from "./api/time/time.slice";
import categoryReducer from "./api/category/category.slice";
import { vikApi } from "./api/vik.api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    modal: modalReducer,
    slide: slideReducer,
    category: categoryReducer,
    type: typeReducer,
    time: timeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vikApi.middleware)
});
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
