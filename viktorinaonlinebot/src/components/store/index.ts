import { configureStore } from "@reduxjs/toolkit";
import { vikApi } from "./api/vik.api";
import { modalSlice } from "./modal.slice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    modal: modalSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(vikApi.middleware),
  devTools: true
})

export type modalDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store

export const useModalDispatch: () => modalDispatch = useDispatch
export const useModalSelector: TypedUseSelectorHook<RootState> = useSelector