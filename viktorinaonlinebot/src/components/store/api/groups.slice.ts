import { ICategoryGroup } from "../../../models/ICategoryGroup";
import { IActiveChat } from "../../../models/chats/IActiveChat";
import { IChat } from "../../../models/chats/IChat";
import { IGroup } from "../../../models/chats/IGroup";
import { vikApi } from "./vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query<IGroup[], number>({
      query: (chat) => ({
        url: `chat/findByReferal/${chat}`,
      }),
    }),
    getInfoGroups: build.query<IChat, number>({
      query: (chat) => ({
        url: `chat/groupInfoById/${chat}`,
      }),
    }),
    getGroupDb: build.query<IGroup, number>({
      query: (chat) => ({
        url: `chat/findByChatId/${chat}`,
      }),
    }),
    getActiveGroups: build.query<boolean, number>({
      query: (chat) => ({
        url: `chat-active/${chat}`,
      }),
    }),
    getCateoryGroups: build.query<ICategoryGroup[], bigint>({
      query: (chat) => ({
        url: `chat-category/${chat}`,
      }),
    }),
    setActiveGroups: build.mutation<IActiveChat, bigint>({
      query: (chat) => ({
        url: `/chat-active`,
        method: "POST",
        body: { chat },
      }),
    }),
    deleteActiveGroups: build.mutation<IActiveChat, bigint>({
      query: (chat) => ({
        url: `/chat-active/${chat}`,
        method: "DELETE",
        body: { chat },
      }),
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
  useGetActiveGroupsQuery,
  useSetActiveGroupsMutation,
  useDeleteActiveGroupsMutation,
  useGetCateoryGroupsQuery,
  useGetGroupDbQuery
} = extendedApiSlice;
