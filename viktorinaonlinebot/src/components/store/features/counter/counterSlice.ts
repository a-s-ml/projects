import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';

export interface CounterState {
  value: number;
  visible: boolean;
}

const initialState: CounterState = {
  value: 0,
  visible: false
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isVisible: (state) => {
      state.visible = !state.visible;
    },
    isVisByAmount: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
    isVis: (state) => {
      state.visible = true;
    },
    isnotVis: (state) => {
      state.visible = false;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  }
});

export const { increment, decrement, incrementByAmount, isVisible, isVis, isnotVis, isVisByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export const selectVisible = (state: RootState) => state.counter.visible;

export default counterSlice.reducer;
