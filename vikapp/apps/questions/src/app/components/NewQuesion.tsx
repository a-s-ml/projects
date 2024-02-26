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

  const { steps, currentStepIndex, step, isLastStep, next } = useStepsForm([
    <TextList onSubmit={onSubmit} />,
    <CategoryList onSubmit={onSubmit} />,
    <AnswersList onSubmit={onSubmit} />,
  ]);

  function onSubmit() {
    console.log('onSubmit');
    tg.MainButton.hide();
    if (!isLastStep) return next();
    if (isLastStep) {
      console.log('dispatch');
      dispatch(showQuestionSlide(false));
      dispatch(getQuestionDefault(''));
    }
  }

  console.log('currentStepIndex', currentStepIndex);
  console.log('isLastStep', isLastStep);
  console.log('step', step);
  console.log(useQuestionSelector(storeQuestion.getState));

  const [addQuestion, {}] = useAddQuestionMutation();

  step ? console.log('step') : console.log('!step');

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
