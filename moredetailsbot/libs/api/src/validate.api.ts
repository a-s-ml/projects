import { globalApi } from '@api';
import { Validate } from '@types';

export type ChatConnect = {
  chat: number;
  user: number;
};

export type ChatApi = {
  id: number;
  name: string;
  admin: number;
  type: number;
};

export type ResponseChat = {
  chat: ChatApi;
  accessToken: string;
};

export const extendedApiSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({
    validate: build.query<Validate, string>({
      query: (initData: string) => ({
        url: `chat/validateUser/${initData}`,
      }),
      providesTags: ['Validate'],
    }),
    join: build.mutation<ResponseChat, ChatConnect>({
      query: ({ chat, user }) => ({
        url: `/join`,
        method: 'POST',
        body: { chat, user },
      }),
    }),
  }),
});

export const { useValidateQuery, useJoinMutation } = extendedApiSlice;
