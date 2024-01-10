import { ITime } from "../../../models/ITime";
import { vikApi } from "./vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getTime: build.query<ITime[], string>({
      query: () => ({
        url: `time`,
      }),
    }),
  }),
});

export const { useGetTimeQuery } = extendedApiSlice;
