import { useState } from "react";
import { CategoryList } from "./newQuestion/CategoryList";
import { AnswersList } from "./newQuestion/AnswersList";
import { useMultistepForm } from "../../hooks/useNewQuestionFormContext";
import StepsForm from "./newQuestion/StepsForm";
import { TextForm } from "./newQuestion/TextForm";
import { useAppDispatch } from "../../store";
import { showModal } from "../../store/api/modal.slice";
import { showSlide } from "../../store/api/slide.slice";

type FormData = {
  text: string;
  category: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerRight: number;
};

const INITIAL_DATA: FormData = {
  text: "",
  category: 63,
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answerRight: 0,
};

function NewQuesion() {
  const [data, setData] = useState(INITIAL_DATA);

  console.log(data);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <TextForm {...data} updateFields={updateFields} />,
      <CategoryList {...data} updateFields={updateFields} />,
      <AnswersList {...data} updateFields={updateFields} />,
    ]);

  function onSubmit() {
    if (!isLastStep) return next();
  }

  const tg = window.Telegram.WebApp;
  tg.MainButton.setText(isLastStep ? "Добавить вопрос" : "Следующий шаг");
  tg.MainButton.show();
  tg.BackButton.onClick(back);
  tg.onEvent("mainButtonClicked", onSubmit);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <StepsForm step={currentStepIndex + 1} stepsCount={steps.length} />
        <div className="bg-gradient-to-b from-[var(--tg-theme-bg-color)] to-transparent pt-12 w-screen"></div>
      </header>

      <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
        <form className="py-24">{step}</form>
      </div>
    </>
  );
}

export default NewQuesion;
