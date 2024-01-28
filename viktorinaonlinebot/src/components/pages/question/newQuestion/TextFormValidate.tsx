import { CheckIcon, NoSymbolIcon } from "@heroicons/react/24/outline";

interface TextFormValidateProps {
  text: string;
}

const tg = window.Telegram.WebApp;

export function TextFormValidate({ text }: TextFormValidateProps) {
  return (
    <div className="py-4">
      <div className="mt-1 flex items-center gap-x-1.5">
        {text.length >= 10 && (
          <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
        )}
        {text.length < 10 && (
          <NoSymbolIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        )}
        <span
          className={`text-xs ${
            text.length >= 10 ? "text-green-600" : "text-red-500"
          }`}
        >
          Минимальная длина текста вопроса 10 символов
        </span>
      </div>
      <div className="mt-1 flex items-center gap-x-1.5">
        {text.substring(text.length - 1) === "?" && (
          <CheckIcon className="h-5 w-5 text-green-600" aria-hidden="true" />
        )}
        {text.substring(text.length - 1) != "?" && (
          <NoSymbolIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        )}
        <span
          className={`text-xs ${
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
