import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMenu } from '../../../models/IMenu'
import { IQuestion } from '../../../models/IQuestion'
import { ICategory } from '../../../models/ICategory'
import { ICount } from '../../../models/ICount'

interface IIdGroup {
    id:   number;
    group:   number;
}

export const vikApi = createApi({
    reducerPath: 'vikApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api80q.ru/'
    }),
    endpoints: build => ({
        getMenu: build.query<IMenu[], string>({
            query: (search: string) => ({
                url: `menu-${search}`
            })
        }),
        getCategory: build.query<ICategory[], string>({
            query: (search: string) => ({
                url: `category/${search}`
            })
        }),
        getCountQuestionByCategory: build.query<ICount[], number>({
            query: (id: number) => ({
                url: `question/questionCountByCategory`,
                params: {
                    id: id
                }
            })
        }),
        getCountQuestionByCategoryGroup: build.query<ICount[], IIdGroup>({
            query: ({id, group}: IIdGroup) => ({
                url: `question/questionCountByGroup`,
                params: {
                    id: id,
                    group: group
                }
            })
        }),
        getCountAnswerByCategory: build.query<ICount[], number>({
            query: (id: number) => ({
                url: `answer/answerByCategory`,
                params: {
                    id: id
                }
            })
        }),
        getCountAnswerByCategoryGroup: build.query<ICount[], IIdGroup>({
            query: ({id, group}: IIdGroup) => ({
                url: `answer/answerByCategoryGroup`,
                params: {
                    id: id,
                    group: group
                }
            })
        }),
        getQuestion: build.query<IQuestion[], string>({
            query: (search: string) => ({
                url: `question/search`,
                params: {
                    text: search
                }
            })
        })
    })
})

 
export const { 
    useGetMenuQuery, 
    useGetQuestionQuery, 
    useGetCategoryQuery,
    useGetCountAnswerByCategoryGroupQuery,
    useGetCountAnswerByCategoryQuery,
    useGetCountQuestionByCategoryGroupQuery,
    useGetCountQuestionByCategoryQuery 
} = vikApi