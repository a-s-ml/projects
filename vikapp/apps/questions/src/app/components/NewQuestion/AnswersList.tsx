import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { useState } from 'react';
import {
  getQuestionAnswerright,
  selectQuestion,
} from '../../store/slices/questionApp.slice';
import { SimpleInputAnswer, ValidateLengthForm } from '@components';

interface AnswersListProps {
  onSubmit: () => void;
}

export function AnswersList({ onSubmit }: AnswersListProps) {
  const tg = window.Telegram.WebApp;
  const question = useQuestionSelector(selectQuestion);
  const [selectedAnswerRight, setAnswerRight] = useState(question.answerright);
  const [answer, setAnswer] = useState([
    { id: 1, name: 'Answer1', value: '' },
    { id: 2, name: 'Answer2', value: '' },
    { id: 3, name: 'Answer3', value: '' },
    { id: 4, name: 'Answer4', value: '' },
  ]);
  const dispatch = useQuestionDispatch();

  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tname = e.target.name;
    const tvalue = e.target.value;

    const newAnswers = answer.map((item) => {
      if (item.name === tname) {
        return {
          ...item,
          value: tvalue,
        };
      } else {
        return item;
      }
    });
    setAnswer(newAnswers);
  };

  let vb = false;
  let vl = false;
  const validationL = (approval: boolean) => {
    approval ? (vl = true) : (vl = false);
  };

  const validationB = (approval: boolean) => {
    approval ? (vb = true) : (vb = false);
  };
  console.log('vl=', vl);
  console.log('vb=', vb);
  console.log('vl === vb =', vl === vb);
  console.log('(vb === vl) === true =', (vb === vl) === true);

  vl && vb
    ? (tg.MainButton.setText('Следующий шаг'),
      tg.MainButton.show(),
      tg.onEvent('mainButtonClicked', () => {
        tg.MainButton.hide(), onSubmit;
      }))
    : tg.MainButton.hide();

  const hendelClick = (id: number) => {
    setAnswerRight(id);
    dispatch(getQuestionAnswerright(id));
  };

  return (
    <>
      <div className="py-2">
        {answer.map((item) => (
          <SimpleInputAnswer
            id={item.id}
            selected={selectedAnswerRight}
            value={item.value}
            funcChange={handleAnswer}
            funcButton={hendelClick}
          />
        ))}
        <div className="py-4">
          <ValidateLengthForm
            text={
              'Длина текста ответов должна быть не менее 1 не более 35 символов'
            }
            data={{ value: answer, lengthMin: 1, lengthMax: 35 }}
            validation={validationL}
          />
          <ValidateLengthForm
            text={
              'Обязательно нужно выбрать верный вариант ответа (вопросы для всех групп проходят модерацию)'
            }
            data={{ value: selectedAnswerRight, lengthMin: 0, lengthMax: 0 }}
            validation={validationB}
          />
        </div>
      </div>
    </>
  );
}
