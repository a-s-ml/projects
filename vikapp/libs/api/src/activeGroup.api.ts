import { IActiveChat } from "@models";
import { globalApi } from "@api/global";

export const extendedApiSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({
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
  }),
});

export const {
    useGetActiveGroupsQuery,
    useSetActiveGroupsMutation,
    useDeleteActiveGroupsMutation
} = extendedApiSlice;
