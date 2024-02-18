import { QuestionListItem } from './QuestionListItem';

export const QuestionList = () => {
  const chat = 521884639;
  return (
    <ul
      role="list"
      className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
    >
      <QuestionListItem chat={chat} />
    </ul>
  );
};
