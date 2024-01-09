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
    getActiveGroups: build.query<boolean, number>({
      query: (chat) => ({
        url: `chat-active/${chat}`,
      }),
    }),
    setActiveGroups: build.mutation<IActiveChat, number>({
      query: (chat) => ({
        url: `/chat-active`,
        method: 'POST',
        body: chat
      }),
    }),
    deleteActiveGroups: build.mutation<IActiveChat, number>({
      query: (chat) => ({
        url: `/chat-active`,
        method: 'DELETE',
        body: chat
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
  useDeleteActiveGroupsMutation
} = extendedApiSlice;
