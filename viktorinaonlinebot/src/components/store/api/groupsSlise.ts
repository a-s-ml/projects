import { IChat } from "../../../models/chats/IChat";
import { IGroup } from "../../../models/chats/IGroup";
import { vikApi } from "./vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query<IGroup[], number>({
      query: (chat: number) => ({
        url: `chat/findByReferal/${chat}`,
      }),
    }),
    getInfoGroups: build.query<IChat, number>({
      query: (chat: number) => ({
        url: `chat/groupInfoById/${chat}`,
      }),
    }),
    getMemberCountGroups: build.query<number, number>({
      query: (chat: number) => ({
        url: `chat/groupMemberCountById/${chat}`,
      }),
    }),
  }),
});

export const {
  useGetGroupsQuery,
  useGetInfoGroupsQuery,
  useGetMemberCountGroupsQuery,
} = extendedApiSlice;
