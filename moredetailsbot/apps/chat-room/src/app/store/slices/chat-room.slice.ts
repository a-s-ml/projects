import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/chat-room';
import { Validate } from '@types';
import { chatRoomAppState, Poll } from './types';

const initialState: chatRoomAppState = {
  chatRoomSlide: false,
  chatRoomType: '',
  chatRoomChat: {
    isLoading: false,
    wsErrors: [],
    isAdmin: false,
    nominationCount: 0,
    participantCount: 0,
  },
  chatRoomData: undefined,
};

export const chatRoomAppSlice = createSlice({
  name: 'chatRoomApp',
  initialState,
  reducers: {
    setChatAccessToken: (state, action: PayloadAction<string>) => {
      state.chatRoomChat.accessToken = action.payload;
    },
    initializePoll: (state, action: PayloadAction<Poll>) => {
      state.chatRoomChat.poll = action.payload;
    },
    loadingChat: (state, action: PayloadAction<boolean>) => {
      state.chatRoomChat.isLoading = action.payload;
    },
    showChatRoomSlide: (state, action: PayloadAction<boolean>) => {
      state.chatRoomSlide = action.payload;
    },
    typeChatRoom: (state, action: PayloadAction<string>) => {
      state.chatRoomType = action.payload;
    },
    dataChatRoom: (state, action: PayloadAction<Validate>) => {
      state.chatRoomData = action.payload;
    },
  },
});

export const {
  showChatRoomSlide,
  typeChatRoom,
  dataChatRoom,
  initializePoll,
  loadingChat,
  setChatAccessToken,
} = chatRoomAppSlice.actions;

export const selectdataChatRoomSlide = (state: RootState) =>
  state.chatRoomApp.chatRoomSlide;
export const selectdataChatRoomData = (state: RootState) =>
  state.chatRoomApp.chatRoomData;
export const selectdataChatRoomType = (state: RootState) =>
  state.chatRoomApp.chatRoomType;
export const selectInitializePoll = (state: RootState) =>
  state.chatRoomApp.chatRoomChat.poll;
export const selectLoadingChat = (state: RootState) =>
  state.chatRoomApp.chatRoomChat.isLoading;
export const selectChatAccessToken = (state: RootState) =>
  state.chatRoomApp.chatRoomChat.accessToken;

export default chatRoomAppSlice.reducer;
