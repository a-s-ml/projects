import { CategoryList } from "./newQuestion/CategoryList";
import { AnswersList } from "./newQuestion/AnswersList";
import { useMultistepForm } from "../../hooks/useNewQuestionFormContext";
import StepsForm from "./newQuestion/StepsForm";
import { TextForm } from "./newQuestion/TextForm";
import { useAddQuestionMutation } from "../../store/api/question/question.api";
import { store, useAppSelector } from "../../store";
import { selectSlideUser } from "../../store/api/slide.slice";

function NewQuesion() {
  const user = useAppSelector(selectSlideUser);

  function onSubmit() {
    if (!isLastStep) return next();
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
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
