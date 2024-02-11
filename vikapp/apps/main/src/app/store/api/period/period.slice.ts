import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { ITime } from "@models";

export interface periodState {
  all: ITime[];
}

const initialState: periodState = {
  all: [],
};

export const periodSlice = createSlice({
  name: "period",
  initialState,
  reducers: {
    getAllPeriod: (state, action: PayloadAction<ITime[]>) => {
      state.all = action.payload;
    },
  },
});

export const { getAllPeriod } = periodSlice.actions;

export const selectAllPeriod = (state: RootState) => state.period;

export default periodSlice.reducer;
