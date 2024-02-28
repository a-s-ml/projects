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
import { useMainButton, useStepsForm } from '@utils';

export const NewQuesion = () => {
  const dispatch = useQuestionDispatch();
  const user = 521884639;
  const question = useQuestionSelector(selectQuestion);

  function onSubmit() {
    if (!isLastStep) {
      console.log('next');
      next();
    }
    if (isLastStep) {
      console.log('dispatch');
      dispatch(showQuestionSlide(false));
      dispatch(getQuestionDefault(''));
    }
  }

  const { setMainButtonState } = useMainButton(onSubmit);

  const validate = (b: boolean) => {
    setMainButtonState(b);
  };

  const { steps, currentStepIndex, step, isLastStep, next } = useStepsForm([
    <TextList validate={validate} />,
    <CategoryList validate={validate} />,
    <AnswersList validate={validate} />,
  ]);

  const [addQuestion, {}] = useAddQuestionMutation();

  return (
    <Page>
      <HeaderBlock>
        <StepsForm step={currentStepIndex + 1} stepsCount={steps.length} />
      </HeaderBlock>
      <MainBlock>{step}</MainBlock>
    </Page>
  );
};

export default NewQuesion;
