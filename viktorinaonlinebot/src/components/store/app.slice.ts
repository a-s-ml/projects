import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalState {
  curstate: boolean;
  value: number;
}

const initialState: modalState = {
    curstate: false,
    value: 0,
}

export const modalSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleModal(state, action: PayloadAction<number>) {
      state.curstate = !state.curstate
    },
    valueModal(state, action: PayloadAction<number>) {
      state.value = action.payload
    },
  },
});

export const { toggleModal, valueModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer;
