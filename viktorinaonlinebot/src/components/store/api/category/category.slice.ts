import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { ICategory } from "../../../../models/ICategory";

export interface categoryeState {
  categories: ICategory[];
}

const initialState: categoryeState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { getAllCategories } = categorySlice.actions;

export const selectAllCategories = (state: RootState) => state.category;

export default categorySlice.reducer;
