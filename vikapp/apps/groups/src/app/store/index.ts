import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import groupAppSlice from './slices/groupApp.slice';
import { vikApi } from '@api/vik';

export const storeGroups = configureStore({
  reducer: {
    [vikApi.reducerPath]: vikApi.reducer,
    groupApp: groupAppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vikApi.middleware),
});

export type GroupDispatch = typeof storeGroups.dispatch;
export type RootStateGroup = ReturnType<typeof storeGroups.getState>;

export const useGroupDispatch = () => useDispatch<GroupDispatch>();
export const useGroupSelector: TypedUseSelectorHook<RootStateGroup> = useSelector;
