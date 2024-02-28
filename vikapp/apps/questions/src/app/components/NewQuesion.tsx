import {
  storeQuestion,
  useQuestionDispatch,
  useQuestionSelector,
} from '@store/questions';
import {
  getQuestionDefault,
  selectQuestion,
  showQuestionSlide,
} from '../store/slices/questionApp.slice';
import { TextList } from './NewQuestion/TextList';
import StepsForm from './NewQuestion/StepsForm';
import { CategoryList } from './NewQuestion/CategoryList';
import { AnswersList } from './NewQuestion/AnswersList';
import { useAddQuestionMutation } from '@api/question';
import { HeaderBlock, MainBlock, Page } from '@components';
import { useStepsForm } from '@utils';
import { useEffect } from 'react';

export const NewQuesion = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuestionDispatch();
  const user = 521884639;
  const question = useQuestionSelector(selectQuestion);

  const validate = (b: boolean) => {
    b
      ? (tg.MainButton.setText('Далее'),
        tg.MainButton.show(),
        tg.MainButton.onClick(onSubmit))
      : (tg.MainButton.hide(), tg.MainButton.offClick(onSubmit));
  };

  const { steps, currentStepIndex, step, isLastStep, next } = useStepsForm([
    <TextList validate={validate} />,
    <CategoryList validate={validate} />,
    <AnswersList validate={validate} />,
  ]);

  function onSubmit() {
    console.log('onSubmit');
    if (!isLastStep) {
      console.log('next');
      tg.MainButton.hide();
      next();
      return;
    }
    if (isLastStep) {
      console.log('dispatch');
      tg.MainButton.hide();
      dispatch(showQuestionSlide(false));
      dispatch(getQuestionDefault(''));
      return;
    }
  }

  console.log('currentStepIndex', currentStepIndex);
  console.log('isLastStep', isLastStep);
  console.log('step', step);
  console.log('question', question);

  const [addQuestion, {}] = useAddQuestionMutation();

  step ? console.log('step') : console.log('!step');
  currentStepIndex
    ? console.log('currentStepIndex', currentStepIndex)
    : console.log('!currentStepIndex', currentStepIndex);

  return (
    <Page>
      <HeaderBlock>
        <StepsForm step={currentStepIndex + 1} stepsCount={steps.length} />
      </HeaderBlock>
      <div className="text-center pt-9"></div>
      <MainBlock>{step}</MainBlock>
    </Page>
  );
};

export default NewQuesion;
