import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IValidate } from "../../../models/IUser";
import { ITime } from "../../../models/ITime";
import { IType } from "../../../models/IType";
import { ICategory } from "../../../models/ICategory";
import { ICategoryGroup } from "../../../models/ICategoryGroup";

export const vikApi = createApi({
  reducerPath: "vikApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_APIURL,
  }),
  endpoints: (build) => ({
    validate: build.query<IValidate, string>({
      query: (initData: string) => ({
        url: `chat/validateUser/${initData}`,
      }),
    }),
    getTime: build.query<ITime[], number>({
      query: () => ({
        url: `time`,
      }),
    }),
    getTimeGroup: build.query<ITime, number>({
      query: (time) => ({
        url: `time/${time}`,
      }),
    }),
    getType: build.query<IType[], string>({
      query: () => ({
        url: `question-type`,
      }),
    }),
    getTypeGroup: build.query<IType, number>({
      query: (type) => ({
        url: `question-type/${type}`,
      }),
    }),
    getCategory: build.query<ICategory[], string>({
      query: () => ({
        url: `category`,
      }),
    }),
    getCategoryGroups: build.query<ICategoryGroup[], number>({
      query: (chat) => ({
        url: `chat-category/${chat}`,
      }),
    }),
    countCategory: build.query<number, string>({
      query: (count) => ({
        url: `category/${count}`,
      }),
    }),
  }),
});

export const {
  useValidateQuery,
  useGetTimeQuery,
  useGetTimeGroupQuery,
  useGetTypeQuery,
  useGetTypeGroupQuery,
  useGetCategoryQuery,
  useGetCategoryGroupsQuery,
  useCountCategoryQuery,
} = vikApi;
