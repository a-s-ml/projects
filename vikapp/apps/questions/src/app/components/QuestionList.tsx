import { QuestionListItem } from './QuestionListItem';

export const QuestionList = () => {
  return (
    <ul
      role="list"
      className="divide-y divide-[var(--tg-theme-hint-color)]"
    >
      <QuestionListItem chat={521884639} />
    </ul>
  );
};
