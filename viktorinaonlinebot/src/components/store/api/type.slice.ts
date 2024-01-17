import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IType } from "../../../models/IType";

export interface typeState {
  types: IType[];
}

const initialState: typeState = {
  types: [],
};

const tg = window.Telegram.WebApp;

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    getAllType: (state, action: PayloadAction<IType[]>) => {
      console.log("payload", action.payload);
      state.types = action.payload;
      console.log("state", state.types);
    },
  },
});

export const { getAllType } = typeSlice.actions;

export const selectAllType = (state: RootState) => state.type;

export default typeSlice.reducer;
