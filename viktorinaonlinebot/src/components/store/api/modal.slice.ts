import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface modalState {
  show: boolean;
  data: number;
}

const initialState: modalState = {
  show: false,
  data: 0
}


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    dataModal: (state, action: PayloadAction<number>) => {
      state.data = action.payload;
    },
  }
});

export const { showModal, dataModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal.show;
export const selectModalData = (state: RootState) => state.modal.data;

export default modalSlice.reducer;
