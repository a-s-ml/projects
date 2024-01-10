import { ICategory } from "../../../models/ICategory";
import { vikApi } from "./vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<null, ICategory[]>({
      query: () => ({
        url: `category`,
      }),
    }),
    countCategory: build.query<number, string>({
      query: (count) => ({
        url: `category/${count}`,
      }),
    }),
  }),
});

export const { useCountCategoryQuery } = extendedApiSlice;
