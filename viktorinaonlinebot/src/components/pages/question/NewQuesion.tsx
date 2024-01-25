import { FormEvent, useState } from "react";
import { UserForm } from "./newQuestion/UserForm";
import { AddressForm } from "./newQuestion/AddressForm";
import { AccountForm } from "./newQuestion/AccountForm";
import { useMultistepForm } from "../../hooks/useNewQuestionFormContext";
import { useAppSelector } from "../../store";
import { selectSlideUser } from "../../store/api/slide.slice";
import StepsForm from "./newQuestion/StepsForm";

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
  const user = useAppSelector(selectSlideUser);
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

  return (
      <div>
        (user === 521884639 && (
        <form onSubmit={onSubmit}>
          {/* <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div> */}
          {step}
          <StepsForm stepid={currentStepIndex + 1} />
          <div>
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
        ))
      </div>
  );
}

export default NewQuesion;
