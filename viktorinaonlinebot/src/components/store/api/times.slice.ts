import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ITime } from "../../../models/ITime";

const initialState: ITime[] = []

export const timesSlice = createSlice({
  name: "times",
  initialState,
  reducers: {
    getTimes: (state, action: PayloadAction<ITime[]>) => {
        state = action.payload;
    },
  },
});

export const { getTimes } = timesSlice.actions;

export const selectTimes = (state: RootState) => state.times;

export default timesSlice.reducer;
