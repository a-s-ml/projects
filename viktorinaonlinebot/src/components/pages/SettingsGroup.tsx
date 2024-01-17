import { useGetGroupDbQuery, useGetInfoGroupsQuery } from "../store/api/group.api";
import TypeQuestionGroup from "./sittingsGroup/TypeQuestionGroup";
import CategoryQuestionGroup from "./sittingsGroup/CategoryQuestionGroup";
import TimeQuestionGroup from "./sittingsGroup/TimeQuestionGroup";
import NotactiveSittings from "./sittingsGroup/NotactiveSittings";
import { useAppSelector } from "../store";
import { selectModalData } from "../store/api/modal.slice";

interface NoActive {
  text: string;
}

let noActive: NoActive[] = [
  {
    text: "Сложность вопросов",
  },
  {
    text: "Период жизни вопроса",
  },
  {
    text: "Ежедневная статистика",
  },
];

export default function SettingsGroup() {
  const group = useAppSelector(selectModalData);

  const { data: dataGroupInfo } = useGetInfoGroupsQuery(group);
  const { data: GroupDb } = useGetGroupDbQuery(group);

  return (
    <>
      {dataGroupInfo && GroupDb && (
        <form className="text-center py-24">
          <h3 className="text-sm font-medium text-[var(--tg-theme-text-color)] text-left">
            Настройки викторины в группе "{dataGroupInfo.title}"
          </h3>
          <ul
            role="list"
            className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
          >
            <TypeQuestionGroup group={GroupDb} />
            <CategoryQuestionGroup />
            <TimeQuestionGroup group={GroupDb} />
            {noActive.map((item) => (
              <NotactiveSittings type={item.text} />
            ))}
          </ul>
        </form>
      )}
    </>
  );
}
