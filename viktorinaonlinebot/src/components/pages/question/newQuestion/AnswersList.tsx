import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  getQuestionAnswerFour,
  getQuestionAnswerOne,
  getQuestionAnswerThree,
  getQuestionAnswerTwo,
  getQuestionAnswerright,
  selectQuestion,
} from "../../../store/api/question/question.slice";
import { AnswersListValidate } from "./AnswersListValidate";

interface AnswersListProps {
  onSubmit: () => void;
}

export function AnswersList({ onSubmit }: AnswersListProps) {
  const question = useAppSelector(selectQuestion);
  const [selectedAnswerRight, setAnswerRight] = useState(question.answerright);
  const [answer1, setAnswer1] = useState(question.answer1);
  const [answer2, setAnswer2] = useState(question.answer2);
  const [answer3, setAnswer3] = useState(question.answer3);
  const [answer4, setAnswer4] = useState(question.answer4);
  const dispatch = useAppDispatch();

  const handleAnswer1 = (txt: string) => {
    setAnswer1(txt);
    dispatch(getQuestionAnswerOne(txt));
  };
  const handleAnswer2 = (txt: string) => {
    setAnswer2(txt);
    dispatch(getQuestionAnswerTwo(txt));
  };
  const handleAnswer3 = (txt: string) => {
    setAnswer3(txt);
    dispatch(getQuestionAnswerThree(txt));
  };
  const handleAnswer4 = (txt: string) => {
    setAnswer4(txt);
    dispatch(getQuestionAnswerFour(txt));
  };
  const hendelClick = (id: number) => {
    setAnswerRight(id);
    dispatch(getQuestionAnswerright(id));
  };

  return (
    <>
      <div className="py-2">
        <div>
          <label
            htmlFor="answer1"
            className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
          >
            Вариант ответа 1
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="text"
                name="answer1"
                id="answer1"
                className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
                placeholder="Вариант ответа 1"
                value={answer1}
                onChange={(e) => handleAnswer1(e.target.value)}
              />
            </div>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] ${
                selectedAnswerRight === 1 &&
                "bg-[var(--tg-theme-accent-text-color)]"
              }`}
              onClick={() => hendelClick(1)}
            >
              {selectedAnswerRight === 1 ? (
                <CheckIcon
                  className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
                  aria-hidden="true"
                />
              ) : (
                <XMarkIcon
                  className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
        <div>
          <label
            htmlFor="answer2"
            className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
          >
            Вариант ответа 2
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="text"
                name="answer2"
                id="answer2"
                className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
                placeholder="Вариант ответа 2"
                value={answer2}
                onChange={(e) => handleAnswer2(e.target.value)}
              />
            </div>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] ${
                selectedAnswerRight === 2 &&
                "bg-[var(--tg-theme-accent-text-color)]"
              }`}
              onClick={() => hendelClick(2)}
            >
              {selectedAnswerRight === 2 ? (
                <CheckIcon
                  className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
                  aria-hidden="true"
                />
              ) : (
                <XMarkIcon
                  className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
        <div>
          <label
            htmlFor="answer3"
            className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
          >
            Вариант ответа 3
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="text"
                name="answer3"
                id="answer3"
                className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
                placeholder="Вариант ответа 3"
                value={answer3}
                onChange={(e) => handleAnswer3(e.target.value)}
              />
            </div>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] ${
                selectedAnswerRight === 3 &&
                "bg-[var(--tg-theme-accent-text-color)]"
              }`}
              onClick={() => hendelClick(3)}
            >
              {selectedAnswerRight === 3 ? (
                <CheckIcon
                  className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
                  aria-hidden="true"
                />
              ) : (
                <XMarkIcon
                  className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
        <div>
          <label
            htmlFor="answer4"
            className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
          >
            Вариант ответа 4
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="text"
                name="answer4"
                id="answer4"
                className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
                placeholder="Вариант ответа 4"
                value={answer4}
                onChange={(e) => handleAnswer4(e.target.value)}
              />
            </div>
            <button
              type="button"
              className={`relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] ${
                selectedAnswerRight === 4 &&
                "bg-[var(--tg-theme-accent-text-color)]"
              }`}
              onClick={() => hendelClick(4)}
            >
              {selectedAnswerRight === 4 ? (
                <CheckIcon
                  className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
                  aria-hidden="true"
                />
              ) : (
                <XMarkIcon
                  className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnswersListValidate
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        answer4={answer4}
        answerRight={selectedAnswerRight}
        onSubmit={onSubmit}
      />
    </>
  );
}

// {buttons.map((button) => (
//   <div>
//     <label
//       htmlFor={button.data}
//       className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
//     >
//       {button.text}
//     </label>
//     <div className="mt-2 flex rounded-md shadow-sm">
//       <div className="relative flex flex-grow items-stretch focus-within:z-10">
//         <input
//           type="text"
//           name={button.data}
//           id={button.data}
//           className="block w-full bg-[var(--tg-theme-bg-color)] rounded-none rounded-l-md border-0 py-1.5 pl-2 text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-gray-400"
//           placeholder={button.text}
//           value={button.data}
//           onChange={(e) => updateFields({ answer1: e.target.value })}
//         />
//       </div>
//       <button
//         type="button"
//         className={`relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-[var(--tg-theme-text-color)] ring-1 ring-inset ring-[var(--tg-theme-text-color)] ${
//           selectedAnswerRight === button.id &&
//           "bg-[var(--tg-theme-accent-text-color)]"
//         }`}
//         onClick={() => hendelClick(button.id)}
//       >
//         {selectedAnswerRight === button.id ? (
//           <CheckIcon
//             className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
//             aria-hidden="true"
//           />
//         ) : (
//           <XMarkIcon
//             className="-ml-0.5 h-5 w-5 text-[var(--tg-theme-text-color)]"
//             aria-hidden="true"
//           />
//         )}
//       </button>
//     </div>
//   </div>
// ))}

// const buttons = [
//   { id: 1, text: "Вариант ответа 1", data: answer1 },
//   { id: 2, text: "Вариант ответа 2", data: answer2 },
//   { id: 3, text: "Вариант ответа 3", data: answer3 },
//   { id: 4, text: "Вариант ответа 4", data: answer4 },
// ];
