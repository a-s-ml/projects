import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import modalReducer from './api/modal.slice';
import { vikApi } from './api/vik.api';

export const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    modal: modalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;