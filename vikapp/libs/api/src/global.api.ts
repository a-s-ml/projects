import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const staggeredBaseQuery = retry(
  fetchBaseQuery({ baseUrl: 'https://api80q.ru/viktorinaonlinebot/' }),
  { maxRetries: 5 }
);

export const globalApi = createApi({
  reducerPath: 'vikApi',
  refetchOnFocus: true,
  baseQuery: staggeredBaseQuery,
  tagTypes: [
    'TypeGroup',
    'TimeGroup',
    'CategoryGroup',
    'Validate',
    'CountAvailableQuestionGroup',
    'CountPublishedQuestionGroup',
  ],
  endpoints: () => ({}),
});
