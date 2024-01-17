import {
  useGetGroupDbQuery,
  useGetInfoGroupsQuery,
} from "../store/api/group.api";
import TypeQuestionGroup from "./sittingsGroup/TypeQuestionGroup";
import CategoryQuestionGroup from "./sittingsGroup/CategoryQuestionGroup";
import TimeQuestionGroup from "./sittingsGroup/TimeQuestionGroup";
import NotactiveSittings from "./sittingsGroup/NotactiveSittings";
import { useGetCategoryGroupsQuery } from "../store/api/category/category.api";
import { useGetTypeByIdQuery } from "../store/api/type/type.api";
import { useGetTimeByIdQuery } from "../store/api/time/time.api";
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

export default function SettingsGroup({}) {
  const group = useAppSelector(selectModalData);

  const tg = window.Telegram.WebApp;

  const { data: dataGroupInfo } = useGetInfoGroupsQuery(group);
  const { data: GroupDb } = useGetGroupDbQuery(group);

  const { data: GroupTime } = useGetTimeByIdQuery(GroupDb?.time || 0);
  const { data: GroupCategory } = useGetCategoryGroupsQuery(group);

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
              <li className="py-4 px-0">
                <TypeQuestionGroup />
              </li>
            {GroupCategory && (
              <li className="py-4 px-0">
                <CategoryQuestionGroup category={GroupCategory} />
              </li>
            )}
            {GroupTime && (
              <li className="py-4 px-0">
                <TimeQuestionGroup timeGroup={GroupTime} />
              </li>
            )}
            {noActive.map((item) => (
              <li className="py-4 px-0 cursor-not-allowed">
                <NotactiveSittings type={item.text} />
              </li>
            ))}
          </ul>
        </form>
      )}
    </>
  );
}
