import { useQuestionDispatch } from '../store';
import { showQuestionSlide } from '../store/slices/questionApp.slice';

export const QuestionList = () => {
  const dispatch = useQuestionDispatch();

  return (
    <ul
      role="list"
      className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
    >
      <li className={'my-5'} onClick={() => dispatch(showQuestionSlide(true))}>
        dsfcv1
      </li>
      <li className={'my-5'} onClick={() => dispatch(showQuestionSlide(true))}>
        dsfcv2
      </li>
    </ul>
  );
};
