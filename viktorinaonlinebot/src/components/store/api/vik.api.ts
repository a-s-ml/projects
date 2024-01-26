import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { IValidate } from "../../../models/IUser";

const staggeredBaseQuery = retry(
  fetchBaseQuery({ baseUrl: process.env.REACT_APP_APIURL }),
  { maxRetries: 5 }
);

export const vikApi = createApi({
  reducerPath: "vikApi",
  refetchOnFocus: true,
  baseQuery: staggeredBaseQuery,
  tagTypes: ["TypeGroup", "TimeGroup", "CategoryGroup", "Validate", "CountAvailableQuestionGroup"],
  endpoints: (build) => ({
    validate: build.query<IValidate, string>({
      query: (initData: string) => ({
        url: `chat/validateUser/${initData}`,
      }),
      providesTags: ["Validate"],
    }),
  }),
});

export const { useValidateQuery } = vikApi;
