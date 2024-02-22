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
import { useNewQuestionForm } from '../hooks/useNewQuestionForm';
import { useAddQuestionMutation } from '@api/question';
import { HeaderBlock, MainBlock, Page } from '@components';

export const NewQuesion = () => {
  const tg = window.Telegram.WebApp;
  const dispatch = useQuestionDispatch();
  const user = 521884639;
  const question = useQuestionSelector(selectQuestion);

  const { steps, currentStepIndex, step, isLastStep, next } =
    useNewQuestionForm([
      <TextList onSubmit={onSubmit} />,
      <CategoryList onSubmit={onSubmit} />,
      <AnswersList onSubmit={onSubmit} />,
    ]);

  const [addQuestion, {}] = useAddQuestionMutation();

  async function onSubmit() {
    tg.MainButton.hide();
    if (!isLastStep) return next();
    if (isLastStep) {
      await addQuestion({
        chat: user as unknown as bigint,
        text: question.text,
        category: question.category,
        answer1: question.answer1,
        answer2: question.answer2,
        answer3: question.answer3,
        answer4: question.answer4,
        answerright: question.answerright,
      });
      dispatch(showQuestionSlide(false));
      dispatch(getQuestionDefault(''));
    }
  }

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
