import { FormEvent, useState } from "react";
import { UserForm } from "./newQuestion/UserForm";
import { AddressForm } from "./newQuestion/AddressForm";
import { AccountForm } from "./newQuestion/AccountForm";
import { useMultistepForm } from "../../hooks/useNewQuestionFormContext";
import { useAppDispatch, useAppSelector } from "../../store";
import { selectSlideUser, showSlide } from "../../store/api/slide.slice";
import StepsForm from "./newQuestion/StepsForm";
import { Header } from "../Header";

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
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  const dispatch = useAppDispatch();

  const tg = window.Telegram.WebApp;
  tg.MainButton.show();
  tg.MainButton.setText(isLastStep ? "Добавить вопрос" : "Следующий шаг");
  tg.offEvent("backButtonClicked", () => dispatch(showSlide(false)));
  tg.onEvent("backButtonClicked", back);
  tg.onEvent("mainButtonClicked", onSubmit);

  return (
    <>
      <Header>
        <>
          <StepsForm step={currentStepIndex + 1} stepsCount={steps.length} />
        </>
      </Header>
      <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
        <form onSubmit={onSubmit}>
          {step}

          <div>
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewQuesion;
