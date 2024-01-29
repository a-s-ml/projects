import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  getQuestionText,
  selectQuestionText,
} from "../../../store/api/question/question.slice";
import { TextListValidate } from "./TextListValidate";
import ApplyDraft from "./ApplyDraft";

interface TextListProps {
  onSubmit: () => void;
}

export function TextList({ onSubmit }: TextListProps) {
  const questionText = useAppSelector(selectQuestionText);
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const handleText = (txt: string) => {
    setText(txt);
    dispatch(getQuestionText(txt));
  };

  const applyDraft = () => {
    setText(questionText);
    dispatch(getQuestionText(questionText));
  }

  return (
    <>
      {questionText != "" && <ApplyDraft applyDraft={applyDraft} />}
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
        <TextListValidate text={text} onSubmit={onSubmit} />
      </div>
    </>
  );
}
