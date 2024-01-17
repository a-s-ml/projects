import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IGroup } from "../../../models/chats/IGroup";

export interface modalState {
  show: boolean;
  data: IGroup;
}

const initialState: modalState = {
  show: false,
  data: {
    id: 0,
    chat: 0n,
    type: "",
    bot: 0,
    date: undefined,
    referral: "",
    question_type: 0,
    time: 0
  }
};
const tg = window.Telegram.WebApp;

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      tg.HapticFeedback.notificationOccurred("success");
      tg.BackButton.show();
      tg.MainButton.hide(); 
      state.show = action.payload;
    },
    dataModal: (state, action: PayloadAction<IGroup>) => {
      state.data = action.payload;
    },
  },
});

export const { showModal, dataModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal.show;
export const selectModalData = (state: RootState) => state.modal.data;

export default modalSlice.reducer;
