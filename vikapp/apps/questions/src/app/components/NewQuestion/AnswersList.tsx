import { useQuestionDispatch, useQuestionSelector } from '@store/questions';
import { useState } from 'react';
import {
  getQuestionAnswerright,
  selectQuestion,
} from '../../store/slices/questionApp.slice';
import { SimpleInputAnswer } from '@components';
import { AnswersListValidate } from './AnswersListValidate';

interface AnswersListProps {
  onSubmit: () => void;
}

export function AnswersList({ onSubmit }: AnswersListProps) {
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
        console.log('1');
        return {
          ...item,
          value: tvalue,
        };
      } else {
        console.log('2');
        return item;
      }
    });
    console.log(newAnswers);
    setAnswer(newAnswers);
  };

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
        <AnswersListValidate
          answers={answer}
          onSubmit={onSubmit}
          answerRight={selectedAnswerRight}
        />
      </div>
    </>
  );
}
