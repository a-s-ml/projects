import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { useEffect, useState } from 'react';
import {
  getQuestionDefault,
  getQuestionText,
  selectQuestionText,
} from '../../store/slices/questionApp.slice';
import { SimpleTextArea, ValidateForm } from '@components';

interface TextListProps {
  onSubmit: () => void;
}

export function TextList({ onSubmit }: TextListProps) {
  const tg = window.Telegram.WebApp;
  const questionText = useQuestionSelector(selectQuestionText);
  const dispatch = useQuestionDispatch();
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState(false);

  useEffect(() => {
    const confirm = (b: boolean) => {
      if (b) return handleText(questionText);
      return dispatch(getQuestionDefault(''));
    };
    setTimeout(() => {
      if (questionText != '') {
        tg.showConfirm(`Применить несохранённый черновик?`, confirm);
      }
    }, 1500);
  }, []);

  textLength
    ? (tg.MainButton.setText('Следующий шаг'),
      tg.MainButton.show(),
      tg.MainButton.onClick(onSubmit))
    : tg.MainButton.hide();

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
        <div className="py-4">
          <ValidateForm
            text={
              'Длина текста вопроса должна быть не менее 10 не более 250 символов'
            }
            data={{ value: text, lengthMin: 10, lengthMax: 250 }}
            validation={setTextLength}
          />
        </div>
      </div>
    </>
  );
}
