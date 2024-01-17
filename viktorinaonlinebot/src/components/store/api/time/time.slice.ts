import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { ITime } from "../../../../models/ITime";

export interface timeState {
  all: ITime[];
}

const initialState: timeState = {
  all: [],
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    getAllTime: (state, action: PayloadAction<ITime[]>) => {
      state.all = action.payload;
    },
  },
});

export const { getAllTime } = timeSlice.actions;

export const selectAllTime = (state: RootState) => state.time;

export default timeSlice.reducer;
