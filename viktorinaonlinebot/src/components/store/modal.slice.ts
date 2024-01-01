import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface modalState {
  isOpen: boolean;
}

const initialState: modalState = {
  isOpen: false,
} as modalState

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal.isOpen
export default modalSlice.reducer;

