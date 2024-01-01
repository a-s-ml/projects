import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface slideState {
  show: boolean;
  value: number;
}

const initialState: slideState = {
  show: false,
  value: 0
}


export const slideSlice = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    showSlide: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    }
  }
});

export const { showSlide } = slideSlice.actions;

export const selectSlide = (state: RootState) => state.slide.show;

export default slideSlice.reducer;
