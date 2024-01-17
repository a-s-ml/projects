import { SetStateAction, useState } from "react";
import { useAddQuestionMutation } from "../../store/api/question/question.api";
import { useAppSelector } from "../../store";
import { selectAllCategories } from "../../store/api/category/category.slice";
import CategoryList from "./newQuestion/CategoryList";
import AnswersList from "./newQuestion/AnswersList";

export default function NewQuesion() {
  const [addNewQuestion, { isLoading }] = useAddQuestionMutation();

  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(0);

  const categories = useAppSelector(selectAllCategories);

  const onTextChanged = (e: { target: { value: SetStateAction<string> } }) =>
    setText(e.target.value);

  const canSave = [text, content, category].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addNewQuestion({
          text: text,
          chat: 0n,
          category: 0,
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: "",
          answerright: 0,
        }).unwrap();

        setText("");
        setContent("");
        setCategory(55);
      } catch (err) {
        console.error("Failed to save the post", err);
      }
    }
  };

  return (
    <>
      <form className="text-center py-24">
        <div>
          <label
            htmlFor="questionText"
            className="block text-sm font-medium leading-6 text-[var(--tg-theme-text-color)]"
          >
            Текст вопроса:
          </label>
          <div className="mt-2">
            <textarea
              rows={5}
              name="questionText"
              id="questionText"
              className="block w-full bg-[var(--tg-theme-bg-color)] rounded-md border-0 py-1.5 text-[var(--tg-theme-text-color)] shadow-sm ring-1 ring-inset ring-[var(--tg-theme-text-color)] placeholder:text-[var(--tg-theme-hint-color)]"
              value={text}
              onChange={onTextChanged}
            />
          </div>
        </div>

        <CategoryList
          categories={categories.all}
          cat={category}
          setCategory={setCategory}
        />
        <AnswersList />
      </form>
      <div className="pb-6"></div>
    </>
  );
}
