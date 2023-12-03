import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { useGetCountAnswerByCategoryGroupQuery, useGetCountAnswerByCategoryQuery, useGetCountQuestionByCategoryGroupQuery, useGetCountQuestionByCategoryQuery } from './store/vik/vik.api'
import { ICategory } from '../models/ICategory'

interface CategoryItemsStatProps {
    id: ICategory["id"]
}

let dt1: number;
let dt2: number;
let dt3: number;
let dt4: number;
let resdt1: string;
let resdt2: string;

export default function CategoryListItemStat({ id }: CategoryItemsStatProps) {

    const group = -1001640101912

    const { isLoading: load1, isError: error1, data: data1 } = useGetCountQuestionByCategoryQuery(id)
    const { isLoading: load2, isError: error2, data: data2 } = useGetCountQuestionByCategoryGroupQuery({ id, group })
    const { isLoading: load3, isError: error3, data: data3 } = useGetCountAnswerByCategoryQuery(id)
    const { isLoading: load4, isError: error4, data: data4 } = useGetCountAnswerByCategoryGroupQuery({ id, group })


    if (data1 && data2) {
        dt1 = data2[0]['count'] / data1[0]['count']
    }
    if (data3 && data4) {
        dt2 = data4[0]['count'] / data3[0]['count']
    }
    if (dt1 && dt2) {
        if (dt1 > dt2) { resdt1 = 'Increased' }
        if (dt1 < dt2) { resdt1 = 'Decreased' }
    }
    if (dt3 && dt4) {
        if (dt3 > dt4) { resdt2 = 'Increased' }
        if (dt3 < dt4) { resdt2 = 'Decreased' }
    }

    return (
        <div>
            <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-tgBg shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="px-4 py-5 sm:p-6">
                    <dt className="text-base font-normal text-tgHint">Questions</dt>
                    <dt className="text-base font-normal text-tgHint"></dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                        <div className="flex items-baseline text-2xl font-semibold text-tgText">
                            {data2?.map(item =>
                                item.count
                            )}
                            {data1?.map(item =>
                                <span className="ml-2 text-sm font-medium text-tgText">
                                    from {item.count}
                                </span>
                            )}
                        </div>

                        <div
                            className={
                                'bg-green-100 text-green-800 inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                            }
                        >
                            {resdt1 === 'Increased' ? (
                                <ArrowUpIcon
                                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                                    aria-hidden="true"
                                />
                            ) : (
                                <ArrowDownIcon
                                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                                    aria-hidden="true"
                                />
                            )}
                            <span className="sr-only "> {resdt1 === 'Increased' ? 'Increased' : 'Decreased'} by </span>
                            {resdt1}
                        </div>
                    </dd>
                </div>

                <div className="px-4 py-5 sm:p-6">
                    <dt className="text-base font-normal text-tgHint">Answers</dt>
                    <dt className="text-base font-normal text-tgHint"></dt>
                    <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                        <div className="flex items-baseline text-2xl font-semibold text-tgText">
                            {data4?.map(item =>
                                item.count
                            )}
                            {data3?.map(item =>
                                <span className="ml-2 text-sm font-medium text-tgText">
                                    from {item.count}
                                </span>
                            )}
                        </div>

                        <div
                            className={
                                'bg-green-100 text-green-800 inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                            }
                        >
                            {resdt2 === 'Increased' ? (
                                <ArrowUpIcon
                                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                                    aria-hidden="true"
                                />
                            ) : (
                                <ArrowDownIcon
                                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                                    aria-hidden="true"
                                />
                            )}
                            <span className="sr-only "> {resdt2 === 'Increased' ? 'Increased' : 'Decreased'} by </span>
                            {resdt2}
                        </div>
                    </dd>
                </div>

            </dl>
        </div>
    )
}
