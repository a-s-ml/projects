import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { ChangeEvent, useState } from 'react';
import {
  getQuestionAnswerFour,
  getQuestionAnswerOne,
  getQuestionAnswerThree,
  getQuestionAnswerTwo,
  getQuestionAnswerright,
  selectQuestion,
} from '../../store/slices/questionApp.slice';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnswersListValidate } from './AnswersListValidate';
import { SimpleInputAnswer } from '@components';

interface AnswersListProps {
  onSubmit: () => void;
}

export function AnswersList({ onSubmit }: AnswersListProps) {
  const answers = [
    { id: 1, text: 'Вариант ответа 1', name: 'Answer1', value: '' },
    { id: 2, text: 'Вариант ответа 2', name: 'Answer2', value: '' },
    { id: 3, text: 'Вариант ответа 3', name: 'Answer3', value: '' },
    { id: 4, text: 'Вариант ответа 4', name: 'Answer4', value: '' },
  ];
  const question = useQuestionSelector(selectQuestion);
  const [selectedAnswerRight, setAnswerRight] = useState(question.answerright);
  const [answer, setAnswer] = useState(answers);
  const dispatch = useQuestionDispatch();
  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const newAnswers = answer.map((item) => {
      if (item.name != name) {
        return item;
      } else {
        return {
          ...item,
          value: value,
        };
      }
    });
    setAnswer(newAnswers);
  };

  const hendelClick = (id: number) => {
    setAnswerRight(id);
    dispatch(getQuestionAnswerright(id));
  };

  return (
    <>
      <div className="py-2">
        {answers.map((item) => (
          <SimpleInputAnswer
            id={item.id}
            selected={selectedAnswerRight}
            label={item.text}
            value={item.value}
            funcChange={handleAnswer}
            funcButton={hendelClick}
          />
        ))}
      </div>
    </>
  );
}
