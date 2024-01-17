import { IReqTimeGroup } from "../../../../models/IMutation";
import { ITime } from "../../../../models/ITime";
import { vikApi } from "../vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({

    getTime: build.query<ITime[], number>({
      query: () => ({
        url: `time`,
      }),
    }),
    
    getTimeGroup: build.query<ITime, number>({
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
  useGetTimeGroupQuery,
  useUpdateTimeGroupsMutation
} = extendedApiSlice;
