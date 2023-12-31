import { configureStore } from "@reduxjs/toolkit";
import { vikApi } from "./api/vik.api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { modalSlice } from "./app.slice";

const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    modalReducer: modalSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(vikApi.middleware),
  devTools: true
})

export type modalDispatch = typeof store.dispatch
export const useModalDispatch: () => modalDispatch = useDispatch
export const useModalSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>

export default store