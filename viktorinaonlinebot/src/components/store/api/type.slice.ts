import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface typeState {
  id: number;
  name: string;
  description: string;
  active: number;
}

const initialState: typeState[] = []

const tg = window.Telegram.WebApp;

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    getAllType: (state, action: PayloadAction<typeState[]>) => {
      state = action.payload;
    },
  },
});

export const { getAllType } = typeSlice.actions;

export const selectAllType = (state: RootState) => state.type;

export default typeSlice.reducer;
