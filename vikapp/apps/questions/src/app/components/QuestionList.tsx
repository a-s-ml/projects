import { QuestionListItem } from './QuestionListItem';

export const QuestionList = () => {
  return (
    <ul
      role="list"
      className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
    >
      <QuestionListItem />
    </ul>
  );
};
