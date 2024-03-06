import {
  storeQuestion,
  useQuestionDispatch,
  useQuestionSelector,
} from '@store/questions';
import {
  getQuestionDefault,
  selectQuestion,
  showQuestionSlide,
} from '@slice/questions';
import { TextList } from './NewQuestion/TextList';
import StepsForm from './NewQuestion/StepsForm';
import { CategoryList } from './NewQuestion/CategoryList';
import { AnswersList } from './NewQuestion/AnswersList';
import { useAddQuestionMutation } from '@api/question';
import { HeaderBlock, MainBlock, Page } from '@components';
import {
  useMainButton,
  useStepsForm,
} from '@utils';

interface NewQuesionProps {
  success: (b: boolean) => void;
}

export const NewQuesion = ({ success }: NewQuesionProps) => {
  const dispatch = useQuestionDispatch();
  const user = 521884639n;
  const question = useQuestionSelector(selectQuestion);

  async function onSubmit() {
    if (!isLastStep) {
      next();
    }
    if (isLastStep) {
      await addQuestion({
        text: question.text,
        chat: user,
        category: question.category,
        answer1: question.answers[0].value,
        answer2: question.answers[1].value,
        answer3: question.answers[2].value,
        answer4: question.answers[3].value,
        answerright: question.answerright,
      });
      success(true);
      dispatch(getQuestionDefault());
      dispatch(showQuestionSlide(false));
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

  console.log(useQuestionSelector(storeQuestion.getState));

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
