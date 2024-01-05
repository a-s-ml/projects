import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IValidate } from "../../../models/IUser";
import { ITime } from "../../../models/ITime";

export const vikApi = createApi({
  reducerPath: "vikApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_APIURL,
  }),
  endpoints: build => ({
    validate: build.query<IValidate, string>({
      query: (initData: string) => ({
        url: `chat/validateUser/${initData}`,
      }),
    }),
    getTime: build.query<ITime, number>({
      query: (time: number) => ({
        url: `time/${time}`,
      }),
    })
  })
});

export const {
  useValidateQuery,
  useGetTimeQuery
} = vikApi