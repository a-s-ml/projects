import { IReqTimeGroup } from "@models";
import { ITime } from "@models";
import { vikApi } from "../vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({

    getTime: build.query<ITime[], string>({
      query: () => ({
        url: `time`,
      }),
    }),
    
    getTimeById: build.query<ITime, number>({
      query: (time) => ({
        url: `time/${time}`,
      }),
      providesTags: ['TimeGroup']
    }),
    
    updateTimeGroups: build.mutation<ITime, IReqTimeGroup>({
      query: ({ chat, time }) => ({
        url: `/chat/updateTimeChat/${chat}`,
        method: "PATCH",
        body: { time },
      }),
      invalidatesTags: ["TimeGroup"]
    }),

  }),
});

export const {
  useGetTimeQuery,
  useGetTimeByIdQuery,
  useUpdateTimeGroupsMutation
} = extendedApiSlice;
