import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './api/modal.slice';
import slideReducer from './api/slide.slice';
import typesReducer from './api/types.slice';
import chatReducer from './api/chat.slice';
import { vikApi } from './api/vik.api';

export const store = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    modal: modalReducer,
    slide: slideReducer,
    chat: chatReducer,
    types: typesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;