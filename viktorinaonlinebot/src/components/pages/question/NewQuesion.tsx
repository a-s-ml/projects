import { useState } from "react";
import { AddressForm } from "./newQuestion/AddressForm";
import { AccountForm } from "./newQuestion/AccountForm";
import { useMultistepForm } from "../../hooks/useNewQuestionFormContext";
import StepsForm from "./newQuestion/StepsForm";
import { TextForm } from "./newQuestion/TextForm";

type FormData = {
  text: string;
  category: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerRight: string;
};

const INITIAL_DATA: FormData = {
  text: "",
  category: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answerRight: "",
};

function NewQuesion() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <TextForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit() {
    if (!isLastStep) return next();
  }

  const tg = window.Telegram.WebApp;
  tg.MainButton.show();
  tg.MainButton.setText(isLastStep ? "Добавить вопрос" : "Следующий шаг");
  tg.onEvent("backButtonClicked", () => back());
  tg.onEvent("mainButtonClicked", () => onSubmit());

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <StepsForm step={currentStepIndex + 1} stepsCount={steps.length} />
        <div className="bg-gradient-to-b from-[var(--tg-theme-bg-color)] to-transparent pt-12 w-screen"></div>
      </header>

      <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
        <form>{step}</form>
      </div>
    </>
  );
}

export default NewQuesion;
