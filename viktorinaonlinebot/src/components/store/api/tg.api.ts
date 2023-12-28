import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IChat } from "../../../models/chats/IChat";

export const tgApi = createApi({
  reducerPath: "tgApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://api.telegram.org/bot741882957:AAG7v4E7lAjXBc6BGjP9qmEFFniRoyc61nw/",
  }),
  endpoints: (build) => ({
    getInfoGroups: build.query<IChat, number>({
      query: (chat: number) => ({
        url: `getChat?chat_id=${chat}`,
      }),
    }),
    getMemberCountGroups: build.query<number, number>({
      query: (chat: number) => ({
        url: `getChatMemberCount?chat_id=${chat}`,
      }),
    }),
  }),
});

export const { useGetInfoGroupsQuery, useGetMemberCountGroupsQuery } = tgApi;
