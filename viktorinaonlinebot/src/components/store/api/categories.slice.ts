import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ITime } from "../../../models/ITime";
import { ICategory } from "../../../models/ICategory";

const initialState: ICategory[] = []

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state, action: PayloadAction<ICategory[]>) => {
        state = action.payload;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
