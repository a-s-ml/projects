import { configureStore } from "@reduxjs/toolkit";
import { vikApi } from "./api/vik.api";
import { modalSlice } from "./modal.slice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    modal: modalSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(vikApi.middleware),
  devTools: true
})