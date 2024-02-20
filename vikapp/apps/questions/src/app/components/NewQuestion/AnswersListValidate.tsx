import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface IAnswers {
  id: number;
  name: string;
  value: string;
}

interface TextFormValidateProps {
  answers: IAnswers[];
  answerRight: number;
  onSubmit: () => void;
}

export function AnswersListValidate({
  answers,
  answerRight,
  onSubmit,
}: TextFormValidateProps) {
  const tg = window.Telegram.WebApp;
  let answersLength: boolean = false;

  answers.map((item) => {
    if (
      item.value.length >= 10 &&
      item.value.length <= 25 &&
      answerRight != 0
    ) {
      answersLength = true;
      tg.MainButton.setText('Добавить вопрос');
      tg.MainButton.show();
      tg.onEvent('mainButtonClicked', onSubmit);
    } else {
      answersLength = false;
      tg.MainButton.hide();
    }
  });

  return (
    <div className="py-4">
      <div className="mt-1 flex items-center gap-x-1.5">
        {answersLength ? (
          <XMarkIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        ) : (
          <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
        )}

        <span
          className={`max-w-[80%] text-xs ${
            answersLength ? 'text-green-600' : 'text-red-500'
          }`}
        >
          Длина текста ответов должна быть не менее 10 не более 25 символов
        </span>
      </div>
      <div className="mt-1 flex items-center gap-x-1.5">
        {answerRight != 0 && (
          <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
        )}
        {answerRight === 0 && (
          <XMarkIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        )}
        <span
          className={`max-w-[80%] text-xs ${
            answerRight != 0 ? 'text-green-600' : 'text-red-500'
          }`}
        >
          Обязательно нужно выбрать верный вариант ответа (вопросы для всех
          групп проходят модерацию)
        </span>
      </div>
    </div>
  );
}
