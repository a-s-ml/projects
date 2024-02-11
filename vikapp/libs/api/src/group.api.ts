import { IChat } from "@models";
import { IGroup } from "@models";
import { vikApi } from "./vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query<IGroup[], number>({
      query: (chat) => ({
        url: `chat/findByReferal/${chat}`,
      }),
      providesTags: ['TypeGroup', 'TimeGroup', 'CategoryGroup']
    }),
    getInfoGroups: build.query<IChat, bigint>({
      query: (chat) => ({
        url: `chat/groupInfoById/${chat}`,
      }),
    }),
    getGroupDb: build.query<IGroup, bigint>({
      query: (chat) => ({
        url: `chat/findByChatId/${chat}`,
      }),
      providesTags: ['TypeGroup', 'TimeGroup']
    }),
    getMemberCountGroups: build.query<number, number>({
      query: (chat) => ({
        url: `chat/groupMemberCountById/${chat}`,
      }),
    }),
    getFilePhoto: build.query<string, string>({
      query: (id) => ({
        url: `chat/tgGetFilePhoto/${id}`,
      }),
    }),

  }),
});

export const {
  useGetFilePhotoQuery,
  useGetGroupsQuery,
  useGetInfoGroupsQuery,
  useGetMemberCountGroupsQuery,
  useGetGroupDbQuery
} = extendedApiSlice;
