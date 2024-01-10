import { IType } from "../../../models/IType";
import { vikApi } from "./vik.api";

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getType: build.query<IType[], string>({
      query: () => ({
        url: `question-type`,
      }),
    }),
  }),
});

export const { useGetTypeQuery } = extendedApiSlice;
