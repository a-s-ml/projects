import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserData } from "../../../models/IUser";

export const vikApi = createApi({
  reducerPath: "vikApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api80q.ru/viktorinaonlinebot/",
  }),
  endpoints: build => ({
    validate: build.query<IUserData, string>({
      query: (initData: string) => ({
        url: `chat/validateUser`,
        params: {
          initData: initData,
        }
      })
    })
  })
});


export const {
  useValidateQuery
} = vikApi