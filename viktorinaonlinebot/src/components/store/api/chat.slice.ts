import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ITime } from "../../../models/ITime";
import { IType } from "../../../models/IType";

export interface chatState {
  groups: {
    id: bigint;
    time: ITime;
    type: IType;
  }[];
}

const initialState: chatState = {
  groups: [
    {
      id: 0n,
      time: {
        id: 0,
        name: "",
        period: 0,
      },
      type: {
        id: 0,
        name: "",
        description: "",
        active: 0,
      },
    },
  ],
};

const tg = window.Telegram.WebApp;

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    dataChatTime: (state, action: PayloadAction<ITime>) => {
      state.groups[0].time = action.payload;
    },
    dataChatType: (state, action: PayloadAction<IType>) => {
      state.groups[0].type = action.payload;
    },
  },
});

export const { dataChatTime, dataChatType } = chatSlice.actions;

export const selectChatGroups = (state: RootState) => state.chat.groups;

export default chatSlice.reducer;
