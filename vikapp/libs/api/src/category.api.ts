import { ICategory } from "@models";
import { ICategoryGroup } from "@models";
import {
  IReqCategoryGroup,
  IResCategoryGroup,
} from "@models";
import { vikApi } from "./vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    countCategory: build.query<number, string>({
      query: (count) => ({
        url: `category/${count}`,
      }),
    }),

    getCategory: build.query<ICategory[], string>({
      query: () => ({
        url: `category`,
      }),
    }),

    getCategoryById: build.query<ICategory, number>({
      query: (id) => ({
        url: `category/${id}`,
      }),
    }),

    getCategoryGroups: build.query<ICategoryGroup[], bigint>({
      query: (chat) => ({
        url: `chat-category/${chat}`,
      }),
      providesTags: ["CategoryGroup"],
    }),

    addCategoryGroups: build.mutation<IResCategoryGroup, IReqCategoryGroup>({
      query: ({ chat, category }) => ({
        url: `/chat-category`,
        method: "POST",
        body: { chat, category },
      }),
      invalidatesTags: ["CategoryGroup", "CountAvailableQuestionGroup"],
    }),

    deleteCategoryGroups: build.mutation<IResCategoryGroup, IReqCategoryGroup>({
      query: ({ chat, category }) => ({
        url: `/chat-category`,
        method: "DELETE",
        body: { chat, category },
      }),
      invalidatesTags: ["CategoryGroup", "CountAvailableQuestionGroup"],
    }),
  }),
});

export const { 
  useCountCategoryQuery,
  useGetCategoryQuery,
  useGetCategoryGroupsQuery,
  useAddCategoryGroupsMutation, 
  useDeleteCategoryGroupsMutation,
  useGetCategoryByIdQuery
} =
  extendedApiSlice;
