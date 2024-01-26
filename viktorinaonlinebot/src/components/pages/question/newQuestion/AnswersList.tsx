import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useAppDispatch } from "../../../store";
import { getQuestionAnswerOne, getQuestionAnswerright } from "../../../store/api/question/question.slice";

export function AnswersList() {
  const [selectedAnswerRight, setAnswerRight] = useState(0);
  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: ""
  })
  const dispatch = useAppDispatch();

const hendleAnswers = (e: { target: { name: any; value: any; }; }) => {
  const name = e.target.name
  const value = e.target.value
  setAnswers(prevData => ({
    ...prevData,
    [name]: value
}))
}


  const hendelClick = (id: number) => {
    setAnswerRight(id);
    dispatch(getQuestionAnswerright(id));
  };

  return (
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
              value={answers.answer1}
              onChange={hendleAnswers}
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
              value={answers.answer2}
              onChange={hendleAnswers}
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
              value={answers.answer3}
              onChange={hendleAnswers}
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
              value={answers.answer4}
              onChange={hendleAnswers}
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