import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mainAppSlice from '@slice/main';
import { globalApi } from '@api/global';

export const storeMain = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    mainApp: mainAppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

export type AppDispatch = typeof storeMain.dispatch;
export type RootState = ReturnType<typeof storeMain.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
