import { configureStore } from "@reduxjs/toolkit";
import { vikApi } from "./vik/vik.api";

export const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vikApi.middleware)
})