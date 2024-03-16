import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const staggeredBaseQuery = retry(
  fetchBaseQuery({ baseUrl: 'https://api80q.ru/mdws/chats' })
);

export const globalApi = createApi({
  reducerPath: 'mdwsApi',
  refetchOnFocus: true,
  baseQuery: staggeredBaseQuery,
  tagTypes: ['Validate'],
  endpoints: () => ({}),
});
