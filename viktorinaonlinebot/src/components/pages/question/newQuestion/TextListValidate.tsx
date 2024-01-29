import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface TextListValidateProps {
  text: string;
  onSubmit: () => void;
}

const tg = window.Telegram.WebApp;

export function TextListValidate({ text, onSubmit }: TextListValidateProps) {
  if (text.length > 10 && text.substring(text.length - 1) === "?") {
    tg.MainButton.setText("Следующий шаг");
    tg.MainButton.show();
    tg.onEvent("mainButtonClicked", onSubmit);
  } else {
    tg.MainButton.hide();
  }

  return (
    <div className="py-4">
      <div className="mt-1 flex items-center gap-x-1.5">
        {text.length >= 10 && (
          <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
        )}
        {text.length < 10 && (
          <XMarkIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        )}
        <span
          className={`max-w-[80%] text-xs ${
            text.length >= 10 ? "text-green-600" : "text-red-500"
          }`}
        >
          Минимальная длина текста вопроса должна составлять не менее 10
          символов
        </span>
      </div>
      <div className="mt-1 flex items-center gap-x-1.5">
        {text.substring(text.length - 1) === "?" && (
          <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
        )}
        {text.substring(text.length - 1) != "?" && (
          <XMarkIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        )}
        <span
          className={`max-w-[80%] text-xs ${
            text.substring(text.length - 1) === "?"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          Сформулируйте вопрос так, чтобы он заканчивался вопросительным знаком
        </span>
      </div>
    </div>
  );
}
