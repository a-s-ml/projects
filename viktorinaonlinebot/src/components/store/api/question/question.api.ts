import { IQuestion } from "../../../../models/IQuestion";
import { vikApi } from "../vik.api";

export interface IAddQuestion {
  chat: bigint;
  text: string;
  category: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerright: number;
}

export const extendedApiSlice = vikApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestionById: build.query<IQuestion, number>({
      query: (id) => ({
        url: `question/findById/${id}`,
      }),
    }),

    getQuestionByChat: build.query<IQuestion[], number>({
      query: (chat) => ({
        url: `question/findByChatId/${chat}`,
      }),
    }),

    updateQuestion: build.mutation<IQuestion, any>({
      query: ({ id, question }) => ({
        url: `/question/${id}`,
        method: "PATCH",
        body: { question },
      }),
    }),

    addQuestion: build.mutation<IQuestion, IAddQuestion>({
      query: (question) => ({
        url: `/question`,
        method: "POST",
        body: { question },
      }),
    }),

    deleteQuestion: build.mutation<number, number>({
      query: (id) => ({
        url: `/chat-category`,
        method: "DELETE",
        body: { id },
      }),
    }),
  }),
});

export const {
  useGetQuestionByChatQuery,
  useGetQuestionByIdQuery,
  useAddQuestionMutation,
  useDeleteQuestionMutation,
  useUpdateQuestionMutation
} = extendedApiSlice;
