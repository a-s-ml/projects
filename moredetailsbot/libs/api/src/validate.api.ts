import { globalApi } from '@api';
import { EventMessage, EventUser, Validate } from '@types';

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
      query: (initData) => ({
        url: `/validateUser/${initData}`,
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
    getMessage: build.query<EventMessage[], number>({
      query: (chat) => ({
        url: `/messages/${chat}`,
      }),
    }),
    getUserById: build.query<EventUser, number>({
      query: (user) => ({
        url: `/users/${user}`,
      }),
    }),
  }),
});

export const {
  useValidateQuery,
  useJoinMutation,
  useGetMessageQuery,
  useGetUserByIdQuery,
} = extendedApiSlice;
