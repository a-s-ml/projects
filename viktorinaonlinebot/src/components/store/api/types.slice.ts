import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IType } from "../../../models/IType";

const initialState: IType = {
  id: 0,
  active: 0,
  description: "хуй",
  name: "2 хуя",
};

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    getTypes: (state, action: PayloadAction<IType>) => {
      state = action.payload;
    },
  },
});

export const { getTypes } = typesSlice.actions;

export const selectTypes = (state: RootState) => state.types;

export default typesSlice.reducer;
