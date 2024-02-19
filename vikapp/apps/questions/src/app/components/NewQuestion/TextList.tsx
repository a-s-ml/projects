import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { useEffect, useState } from 'react';
import {
  getQuestionDefault,
  getQuestionText,
  selectQuestionText,
} from '../../store/slices/questionApp.slice';
import { TextListValidate } from './TextListValidate';
import { SimpleTextArea } from '@components';

interface TextListProps {
  onSubmit: () => void;
}

export function TextList({ onSubmit }: TextListProps) {
  const tg = window.Telegram.WebApp;
  const questionText = useQuestionSelector(selectQuestionText);
  const dispatch = useQuestionDispatch();
  const [text, setText] = useState('');

  useEffect(() => {
    const confirm = (b: boolean) => {
      if (b) return handleText(questionText);
      return dispatch(getQuestionDefault(''));
    };
    if (questionText != '') {
      tg.showConfirm(`Применить несохранённый черновик?`, confirm);
    }
  }, []);

  const handleText = (txt: string) => {
    setText(txt);
    dispatch(getQuestionText(txt));
  };

  return (
    <>
      <div className="py-2">
        <SimpleTextArea
          label={'Текст вопроса:'}
          rows={5}
          value={text}
          func={(e) => handleText(e.target.value)}
        />
        <TextListValidate text={text} onSubmit={onSubmit} />
      </div>
    </>
  );
}
