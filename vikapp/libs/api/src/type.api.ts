import { IReqTypeGroup } from "@models";
import { IType } from "@models";
import { globalApi } from "@api/global";

export const extendedApiSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({

    getType: build.query<IType[], string>({
      query: () => ({
        url: `question-type`,
      }),
    }),

    getTypeById: build.query<IType, number>({
      query: (type) => ({
        url: `question-type/${type}`,
      }),
      providesTags: ['TypeGroup']
    }),

    updateTypeGroups: build.mutation<IType, IReqTypeGroup>({
      query: ({ chat, question_type }) => ({
        url: `/chat/updateTypeChat/${chat}`,
        method: "PATCH",
        body: { question_type },
      }),
      invalidatesTags: ["TypeGroup"]
    }),
    
  }),
});

export const {
  useGetTypeQuery,
  useGetTypeByIdQuery,
  useUpdateTypeGroupsMutation
} = extendedApiSlice;
