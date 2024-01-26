import { useState } from "react";
import { useAppDispatch } from "../../../store";
import { getQuestionText } from "../../../store/api/question/question.slice";

interface TextFormProps {
  onSubmit: () => void;
}

export function TextForm({ onSubmit }: TextFormProps) {
  
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleText = (txt: string) => {
    setText(txt);
    dispatch(getQuestionText(txt));
  };

  const tg = window.Telegram.WebApp;
  tg.MainButton.hide();
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
    </div>
  );
}
