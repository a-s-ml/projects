import { IGroup } from "../../../models/chats/IGroup";
import { IGroupInfo } from "../../../models/chats/IGroupInfo";
import { vikApi } from "./vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query<IGroup[], number>({
      query: (chat: number) => ({
        url: `chat/findByReferal/${chat}`,
      }),
    }),
    getInfoGroups: build.query<IGroupInfo[], number>({
      query: (chat: number) => ({
        url: `chat/groupInfoById/${chat}`,
      }),
    }),
  }),
});

export const { useGetGroupsQuery, useGetInfoGroupsQuery } = extendedApiSlice;
