import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICounter } from '../../../models/ICounter'


export const vikApi = createApi({
    reducerPath: 'vikApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api80q.ru/api'
    }),
    tagTypes: ['Counters'],
    endpoints: build => ({
        getCounters: build.query<ICounter[], string>({
            query: (type: string) => ({
                url: `counter/${type}`
            })
        }),
    })
})


export const { useGetCountersQuery } = vikApi