import { CheckIcon, NoSymbolIcon } from "@heroicons/react/24/outline";

interface TextFormValidateProps {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerRight: number;
  onSubmit: () => void;
}

const tg = window.Telegram.WebApp;
tg.MainButton.hide();

export function AnswersListValidate({
  answer1,
  answer2,
  answer3,
  answer4,
  answerRight,
  onSubmit,
}: TextFormValidateProps) {
  if (
    answer1.length > 10 &&
    answer2.length > 10 &&
    answer3.length > 10 &&
    answer4.length > 10 &&
    answerRight != 0
  ) {
    tg.MainButton.setText("Добавить вопрос");
    tg.MainButton.show();
    tg.onEvent("mainButtonClicked", onSubmit);
  }

  return (
    <div className="py-4">
      <div className="mt-1 flex items-center gap-x-1.5">
        {answer1.length > 25 ||
          answer2.length > 25 ||
          answer3.length > 25 ||
          answer4.length > 25 && (
            <NoSymbolIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          )}
        {answer1.length <= 25 &&
          answer2.length <= 25 &&
          answer3.length <= 25 &&
          answer4.length <= 25 && (
            <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
          )}
        <span
          className={`max-w-[90%] text-xs ${
            answer1.length <= 25 &&
            answer2.length <= 25 &&
            answer3.length <= 25 &&
            answer4.length <= 25
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          Максимальная длина текста ответов должна составлять не более 25
          символов
        </span>
      </div>
      <div className="mt-1 flex items-center gap-x-1.5">
        {answer1.length >= 10 &&
          answer2.length >= 10 &&
          answer3.length >= 10 &&
          answer4.length >= 10 && (
            <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
          )}
        {answer1.length < 10 ||
          answer2.length < 10 ||
          answer3.length < 10 ||
          answer4.length < 10 && (
            <NoSymbolIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          )}
        <span
          className={`max-w-[90%] text-xs ${
            answer1.length >= 10 &&
            answer2.length >= 10 &&
            answer3.length >= 10 &&
            answer4.length >= 10
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          Минимальная длина текста ответов должна составлять не менее 10
          символов
        </span>
      </div>
      <div className="mt-1 flex items-center gap-x-1.5">
        {answerRight != 0 && (
          <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
        )}
        {answerRight === 0 && (
          <NoSymbolIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        )}
        <span
          className={`max-w-[90%] text-xs ${
            answerRight != 0 ? "text-green-600" : "text-red-500"
          }`}
        >
          Обязательно нужно выбрать верный вариант ответа (вопросы для всех групп проходят модерацию)
        </span>
      </div>
    </div>
  );
}
