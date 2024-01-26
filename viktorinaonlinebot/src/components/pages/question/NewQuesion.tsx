import { CategoryList } from "./newQuestion/CategoryList";
import { AnswersList } from "./newQuestion/AnswersList";
import StepsForm from "./newQuestion/StepsForm";
import { TextForm } from "./newQuestion/TextForm";
import { useAddQuestionMutation } from "../../store/api/question/question.api";
import { store, useAppDispatch, useAppSelector } from "../../store";
import { selectSlideUser, showSlide } from "../../store/api/slide.slice";
import { useNewQuestionForm } from "../../hooks/useNewQuestionForm";
import { getQuestionDefault, selectQuestion } from "../../store/api/question/question.slice";
import { showModal } from "../../store/api/modal.slice";

function NewQuesion() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectSlideUser);
  const question = useAppSelector(selectQuestion);

  function onSubmit() {
    if (!isLastStep) return next();
    addQuestion({
      chat: user as unknown as bigint,
      text: question.text,
      category: question.category,
      answer1: question.answer1,
      answer2: question.answer2,
      answer3: question.answer3,
      answer4: question.answer4,
      answerright: question.answerright
    })
    dispatch(getQuestionDefault());
    dispatch(showModal(false));
    dispatch(showSlide(true));
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useNewQuestionForm([
      <TextForm onSubmit={onSubmit} />,
      <CategoryList onSubmit={onSubmit} />,
      <AnswersList onSubmit={onSubmit} />,
    ]);

  const [addQuestion, {}] = useAddQuestionMutation();
  console.log(useAppSelector(store.getState));

  console.log(currentStepIndex);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <StepsForm step={currentStepIndex + 1} stepsCount={steps.length} />
        <div className="bg-gradient-to-b from-[var(--tg-theme-bg-color)] to-transparent pt-12 w-screen"></div>
      </header>

      <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
        <div className="py-24">{step}</div>
      </div>
    </>
  );
}

export default NewQuesion;
