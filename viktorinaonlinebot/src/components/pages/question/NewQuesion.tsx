import { useState } from "react";
import { useAddQuestionMutation } from "../../store/api/question/question.api";
import { useAppSelector } from "../../store";
import { selectAllCategories } from "../../store/api/category/category.slice";
import CategoryList from "./newQuestion/CategoryList";
import AnswersList from "./newQuestion/AnswersList";
import TexList from "./newQuestion/TexList";
import SwipeToDelete from "../../hooks/useSwipeToDelete";
import AddNewCategory from "../group/sittingsGroup/AddNewCategory";

export default function NewQuesion() {
  const [addNewQuestion, { isLoading }] = useAddQuestionMutation();

  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(0);

  const categories = useAppSelector(selectAllCategories);

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
      <form className="text-left pt-14 pb-24">
        <TexList text={text} />
        <CategoryList
          categories={categories.all}
          cat={category}
          setCategory={setCategory}
        />
        <AnswersList />
        <SwipeToDelete key={1} onDelete={() => console.log("sdfsdf 1")}>
          <AddNewCategory />
        </SwipeToDelete>
        <SwipeToDelete key={2} onDelete={() => console.log("sdfsdf 2")}>
          <AddNewCategory />
        </SwipeToDelete>
        <SwipeToDelete key={3} onDelete={() => console.log("sdfsdf 3")}>
          <AddNewCategory />
        </SwipeToDelete>
        <SwipeToDelete key={4} onDelete={() => console.log("sdfsdf 4")}>
          <AddNewCategory />
        </SwipeToDelete>
      </form>

      <div className="pb-6"></div>
    </>
  );
}
