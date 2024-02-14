import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mainAppSlice from './slices/mainApp.slice';
import { vikApi } from '@api/vik';

export const storeMain = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    mainApp: mainAppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vikApi.middleware),
});

export type AppDispatch = typeof storeMain.dispatch;
export type RootState = ReturnType<typeof storeMain.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
