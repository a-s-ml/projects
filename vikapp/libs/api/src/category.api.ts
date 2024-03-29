import { ICategory } from '@models';
import { ICategoryGroup } from '@models';
import { IReqCategoryGroup, IResCategoryGroup } from '@models';
import { globalApi } from '@api/global';

export const extendedApiSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<ICategory[], string>({
      query: () => ({
        url: `category`,
      }),
    }),

    countCategory: build.query<number, string>({
      query: (count) => ({
        url: `category/${count}`,
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
      providesTags: ['CategoryGroup'],
    }),

    addCategoryGroups: build.mutation<IResCategoryGroup, IReqCategoryGroup>({
      query: ({ chat, category }) => ({
        url: `/chat-category`,
        method: 'POST',
        body: { chat, category },
      }),
      invalidatesTags: ['CategoryGroup', 'CountAvailableQuestionGroup'],
    }),

    deleteCategoryGroups: build.mutation<IResCategoryGroup, IReqCategoryGroup>({
      query: ({ chat, category }) => ({
        url: `/chat-category`,
        method: 'DELETE',
        body: { chat, category },
      }),
      invalidatesTags: ['CategoryGroup', 'CountAvailableQuestionGroup'],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCountCategoryQuery,
  useGetCategoryByIdQuery,
  useGetCategoryGroupsQuery,
  useAddCategoryGroupsMutation,
  useDeleteCategoryGroupsMutation,
} = extendedApiSlice;
