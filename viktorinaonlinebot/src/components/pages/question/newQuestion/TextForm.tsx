import { useState } from "react";
import { useAppDispatch } from "../../../store";
import { getQuestionText } from "../../../store/api/question/question.slice";
import { CheckIcon, NoSymbolIcon } from "@heroicons/react/24/outline";

interface TextFormProps {
  onSubmit: () => void;
}

const tg = window.Telegram.WebApp;

export function TextForm({ onSubmit }: TextFormProps) {
  const dispatch = useAppDispatch();

  const [textLength, setTextLength] = useState(0);
  const [text, setText] = useState("");

  const handleText = (txt: string) => {
    setText(txt);
    setTextLength(txt.length);
    dispatch(getQuestionText(txt));
  };

  if (text.length > 5) {
    tg.MainButton.setText("Следующий шаг");
    tg.MainButton.show();
    tg.onEvent("mainButtonClicked", onSubmit);
  }

  return (
    <div className="py-2">
      <label
        htmlFor="questionText"
        className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
      >
        Текст вопроса:
      </label>
      <div className="mt-2">
        <textarea
          rows={5}
          name="questionText"
          id="questionText"
          className="block w-full bg-[var(--tg-theme-bg-color)] rounded-md border-0 px-2 py-2 text-[var(--tg-theme-text-color)] shadow-sm ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-[var(--tg-theme-hint-color)]"
          value={text}
          onChange={(e) => handleText(e.target.value)}
        />
      </div>
      <div className="py-4">
        <div className="mt-1 flex items-center gap-x-1.5">
          {textLength > 10 && (
            <CheckIcon
              className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          {textLength < 10 && (
            <NoSymbolIcon
              className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
              aria-hidden="true"
            />
          )}
          <span className={`text-xs leading-5 ${textLength > 10 ? "text-green-600" : "text-red-500"}`}>
            Минимальная длина текста вопроса 10 символов ${textLength < 10 ? `(осталось {10 - textLength})` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
