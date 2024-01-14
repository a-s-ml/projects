import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IType } from "../../../models/IType";

const initialState: IType[] = [];

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    getTypes: (state, action: PayloadAction<IType[]>) => {
      console.log('payload')
      console.log(action.payload)
      state = state.concat(action.payload);
      console.log('state')
      console.log(state)
    },
  },
});

export const { getTypes } = typesSlice.actions;

export const selectTypes = (state: RootState) => state.types;

export default typesSlice.reducer;
