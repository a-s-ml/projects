import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import groupAppSlice from './slices/groupApp.slice';

export const storeGroups = configureStore({
  reducer: {
    groupApp: groupAppSlice,
  },
});

export type GroupDispatch = typeof storeGroups.dispatch;
export type RootStateGroup = ReturnType<typeof storeGroups.getState>;

export const useGroupDispatch = () => useDispatch<GroupDispatch>();
export const useGroupSelector: TypedUseSelectorHook<RootStateGroup> = useSelector;
