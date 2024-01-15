import {
  IReqCategoryGroup,
  IReqTimeGroup,
  IReqTypeGroup,
  IResCategoryGroup,
} from "../../../models/IMutation";
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
    getInfoGroups: build.query<IChat, bigint>({
      query: (chat) => ({
        url: `chat/groupInfoById/${chat}`,
      }),
    }),
    getGroupDb: build.query<IGroup, bigint>({
      query: (chat) => ({
        url: `chat/findByChatId/${chat}`,
      }),
    }),
    getActiveGroups: build.query<boolean, bigint>({
      query: (chat) => ({
        url: `chat-active/${chat}`,
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
    addCategoryGroups: build.mutation<IResCategoryGroup, IReqCategoryGroup>({
      query: ({ chat, category }) => ({
        url: `/chat-category`,
        method: "POST",
        body: { chat, category },
      }),
    }),
    deleteCategoryGroups: build.mutation<IResCategoryGroup, IReqCategoryGroup>({
      query: ({ chat, category }) => ({
        url: `/chat-category`,
        method: "DELETE",
        body: { chat, category },
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
    updateTypeGroups: build.mutation<IGroup, IReqTypeGroup>({
      query: ({ chat, question_type }) => ({
        url: `/chat/${chat}`,
        method: "PATCH",
        body: { chat, question_type },
      }),
    }),
    updateTimeGroups: build.mutation<IGroup, IReqTimeGroup>({
      query: ({ chat, time }) => ({
        url: `/chat/${chat}`,
        method: "PATCH",
        body: { chat, time },
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
  useGetGroupDbQuery,
  useAddCategoryGroupsMutation,
  useDeleteCategoryGroupsMutation,
  useUpdateTimeGroupsMutation,
  useUpdateTypeGroupsMutation
} = extendedApiSlice;
