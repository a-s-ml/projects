import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vikApi = createApi({
  reducerPath: "vikApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api80q.ru/viktorinaonlinebot/",
  }),
  endpoints: build => ({})
});