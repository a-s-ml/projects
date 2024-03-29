import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { useState } from 'react';
import { getQuestionAnswerright, getQuestionAnswers, selectQuestion } from '@slice/questions';
import { SimpleInputAnswer, ValidateForm } from '@components';

interface AnswersListProps {
  validate: (b: boolean) => void;
}

export function AnswersList({ validate }: AnswersListProps) {
  const question = useQuestionSelector(selectQuestion);
  const [selectedAnswerRight, setAnswerRight] = useState(question.answerright);
  const [answer, setAnswer] = useState([
    { id: 1, name: 'answer1', value: '' },
    { id: 2, name: 'answer2', value: '' },
    { id: 3, name: 'answer3', value: '' },
    { id: 4, name: 'answer4', value: '' },
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
    dispatch(getQuestionAnswers(newAnswers))
  };

  const [validLength, setValidLength] = useState(false);
  const [validButton, setValidButton] = useState(false);

  validLength && validButton ? validate(true) : validate(false);

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
          <ValidateForm
            text={
              'Длина текста ответов должна быть не менее 1 не более 35 символов'
            }
            data={{ value: answer, lengthMin: 1, lengthMax: 35 }}
            validation={setValidLength}
          />
          <ValidateForm
            text={
              'Обязательно нужно выбрать верный вариант ответа (вопросы для всех групп проходят модерацию)'
            }
            data={{ value: selectedAnswerRight, lengthMin: 0, lengthMax: 0 }}
            validation={setValidButton}
          />
        </div>
      </div>
    </>
  );
}
