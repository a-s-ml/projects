import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';

export interface CounterState {
  value: number;
  visible: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  visible: false,
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isVisible: (state) => {
      state.visible = !state.visible;
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

export const { increment, decrement, incrementByAmount, isVisible } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export const selectVisible = (state: RootState) => state.counter.visible;

export default counterSlice.reducer;
