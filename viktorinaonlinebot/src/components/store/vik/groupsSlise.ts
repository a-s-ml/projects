import { vikApi } from "./vik.api";
import { IGroup } from "../../../models/IGroup";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getGroups: build.query<IGroup[], number>({
      query: (chat: number) => ({
        url: `chat/findByReferal/${chat}`,
      }),
    }),
  }),
});

export const { useGetGroupsQuery } = extendedApiSlice;
