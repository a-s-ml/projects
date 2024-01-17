import { SetStateAction, useState } from "react";
import { useAddQuestionMutation } from "../../store/api/question/question.api";
import { useAppSelector } from "../../store";
import { selectAllCategories } from "../../store/api/category/category.slice";

export default function NewQuesion() {
    const [addNewQuestion, { isLoading }] = useAddQuestionMutation()

    const [text, setText] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')

    const categories = useAppSelector(selectAllCategories);

    const onTextChanged = (e: { target: { value: SetStateAction<string>; }; }) => setText(e.target.value)
    const onContentChanged = (e: { target: { value: SetStateAction<string>; }; }) => setContent(e.target.value)
    const onCategoryChanged = (e: { target: { value: SetStateAction<string>; }; }) => setCategory(e.target.value)


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
                    answerright: 0
                }).unwrap()

                setText('')
                setContent('')
                setCategory('')
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    const usersOptions = categories.all.map(category => (
        <option key={category.id} value={category.id}>
            {category.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={text}
                    onChange={onTextChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={category} onChange={onCategoryChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}