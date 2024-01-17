import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

// export interface typeState {
//   id: number;
//   name: string;
//   description: string;
//   active: number;
// }

export interface typeState {
  name: string;
}

const initialState: typeState = {
  name: "",
};

const tg = window.Telegram.WebApp;

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    getAllType: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { getAllType } = typeSlice.actions;

export const selectAllType = (state: RootState) => state.type;

export default typeSlice.reducer;
