import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mainAppSlice from './slices/mainApp.slice';
import { vikApi } from '@api/vik';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    mainApp: mainAppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vikApi.middleware),
});
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
