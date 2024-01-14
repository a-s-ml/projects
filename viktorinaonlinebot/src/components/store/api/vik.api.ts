import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { IValidate } from "../../../models/IUser";
import { ITime } from "../../../models/ITime";
import { IType } from "../../../models/IType";
import { ICategory } from "../../../models/ICategory";
import { ICategoryGroup } from "../../../models/ICategoryGroup";

const staggeredBaseQuery = retry(
  fetchBaseQuery({ baseUrl: process.env.REACT_APP_APIURL }),
  { maxRetries: 5 }
);

export const vikApi = createApi({
  reducerPath: "vikApi",
  baseQuery: staggeredBaseQuery,
  tagTypes: ["Time", "Type", "Category", "CategoryGroup", "Validate", "Group", "ActiveGroups"],
  endpoints: (build) => ({
    validate: build.query<IValidate, string>({
      query: (initData: string) => ({
        url: `chat/validateUser/${initData}`,
      }),
      providesTags: ["Validate"],
    }),
    getTime: build.query<ITime[], number>({
      query: () => ({
        url: `time`,
      }),
      providesTags: ["Time"],
    }),
    getTimeGroup: build.query<ITime, number>({
      query: (time) => ({
        url: `time/${time}`,
      }),
      providesTags: ["Time"],
    }),
    getType: build.query<IType[], string>({
      query: () => ({
        url: `question-type`,
      }),
      providesTags: ["Type"],
    }),
    getTypeGroup: build.query<IType, number>({
      query: (type) => ({
        url: `question-type/${type}`,
      }),
      providesTags: ["Type"],
    }),
    getCategory: build.query<ICategory[], string>({
      query: () => ({
        url: `category`,
      }),
      providesTags: ["Category"],
    }),
    getCategoryGroups: build.query<ICategoryGroup[], bigint>({
      query: (chat) => ({
        url: `chat-category/${chat}`,
      }),
      providesTags: ["CategoryGroup"],
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
