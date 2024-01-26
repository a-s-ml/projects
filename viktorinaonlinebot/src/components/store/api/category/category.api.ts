import { ICategory } from "../../../../models/ICategory";
import { ICategoryGroup } from "../../../../models/ICategoryGroup";
import {
  IReqCategoryGroup,
  IResCategoryGroup,
} from "../../../../models/IMutation";
import { vikApi } from "../vik.api";

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
  useDeleteCategoryGroupsMutation ,

} =
  extendedApiSlice;
