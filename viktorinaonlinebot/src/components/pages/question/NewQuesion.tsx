import { useState } from "react";
import { CategoryList } from "./newQuestion/CategoryList";
import { AnswersList } from "./newQuestion/AnswersList";
import { useMultistepForm } from "../../hooks/useNewQuestionFormContext";
import StepsForm from "./newQuestion/StepsForm";
import { TextForm } from "./newQuestion/TextForm";
import { useAddQuestionMutation } from "../../store/api/question/question.api";
import { useAppSelector } from "../../store";
import { selectSlideUser } from "../../store/api/slide.slice";

type FormData = {
  text: string;
  category: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answerright: number;
};

const initialData: FormData = {
  text: "",
  category: 63,
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answerright: 0,
};

function NewQuesion() {
  const user = useAppSelector(selectSlideUser);
  const [data, setData] = useState(initialData);

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

  const [addQuestion, {}] = useAddQuestionMutation();

  async function onSubmit() {
    if (!isLastStep) return next();
    // await addQuestion({
    //   chat: user as unknown as bigint,
    //   text: data.text,
    //   category: data.category,
    //   answer1: data.answer1,
    //   answer2: data.answer2,
    //   answer3: data.answer3,
    //   answer4: data.answer4,
    //   answerright: data.answerright,
    // });

    console.log({
        chat: user as unknown as bigint,
        text: data.text,
        category: data.category,
        answer1: data.answer1,
        answer2: data.answer2,
        answer3: data.answer3,
        answer4: data.answer4,
        answerright: data.answerright,
      });
  }

  console.log(currentStepIndex);

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
        <div className="py-24">{step}</div>
      </div>
    </>
  );
}

export default NewQuesion;
