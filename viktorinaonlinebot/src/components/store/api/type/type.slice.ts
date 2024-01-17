import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { IType } from "../../../../models/IType";

export interface typeState {
  all: IType[];
}

const initialState: typeState = {
  all: [],
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    getAllType: (state, action: PayloadAction<IType[]>) => {
      state.all = action.payload;
    },
  },
});

export const { getAllType } = typeSlice.actions;

export const selectAllType = (state: RootState) => state.type;

export default typeSlice.reducer;
