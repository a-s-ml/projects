import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IType } from "../../../models/IType";

const initialState: IType[] = [];

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    getTypes: (state, action: PayloadAction<IType[]>) => {
      state = state.concat(action.payload);
    },
  },
});

export const { getTypes } = typesSlice.actions;

export const selectTypes = (state: RootState) => state.types;

export default typesSlice.reducer;
