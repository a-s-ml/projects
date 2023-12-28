import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IValidate } from "../../../models/IUser";

export const vikApi = createApi({
  reducerPath: "vikApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api80q.ru/viktorinaonlinebot/",
  }),
  endpoints: build => ({
    validate: build.query<IValidate, string>({
      query: (initData: string) => ({
        url: `chat/validateUser/${initData}`,
      }),
    })
  })
});

export const {
  useValidateQuery
} = vikApi