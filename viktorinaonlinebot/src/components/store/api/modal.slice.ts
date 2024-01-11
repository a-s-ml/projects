import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface modalState {
  show: boolean;
  data: bigint;
}

const initialState: modalState = {
  show: false,
  data: 0n,
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
    dataModal: (state, action: PayloadAction<bigint>) => {
      state.data = action.payload;
    },
  },
});

export const { showModal, dataModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal.show;
export const selectModalData = (state: RootState) => state.modal.data;

export default modalSlice.reducer;
