import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface modalState {
  show: boolean;
  value: number;
}

const initialState: modalState = {
  show: false,
  value: 0
}


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    }
  }
});

export const { showModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal.show;

export default modalSlice.reducer;
