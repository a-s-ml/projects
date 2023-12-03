import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { vikApi } from "./vik/vik.api";

const rootReducer = combineReducers({
  [vikApi.reducerPath]: vikApi.reducer
})

export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
              .concat(vikApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']