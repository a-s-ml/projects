import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import chatRoomAppSlice from '@slice/chat-room';
import { globalApi } from '@api';

export const storeChatRoom = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    chatRoomApp: chatRoomAppSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

export type AppDispatch = typeof storeChatRoom.dispatch;
export type RootState = ReturnType<typeof storeChatRoom.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
