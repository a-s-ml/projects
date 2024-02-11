import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { ICategory } from "@models";

export interface categoryeState {
  all: ICategory[];
}

const initialState: categoryeState = {
  all: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.all = action.payload;
    },
  },
});

export const { getAllCategories } = categorySlice.actions;

export const selectAllCategories = (state: RootState) => state.category;

export default categorySlice.reducer;
