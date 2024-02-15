import { globalApi } from '@api/global';
import { IValidate } from '@models';

export const extendedApiSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({
    validate: build.query<IValidate, string>({
      query: (initData: string) => ({
        url: `chat/validateUser/${initData}`,
      }),
      providesTags: ['Validate'],
    }),
  }),
});

export const { useValidateQuery } = extendedApiSlice;
