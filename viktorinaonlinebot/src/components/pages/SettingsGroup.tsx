import {
  useGetGroupDbQuery,
  useGetInfoGroupsQuery,
} from "../store/api/group.api";
import TypeQuestionGroup from "./sittingsGroup/TypeQuestionGroup";
import CategoryQuestionGroup from "./sittingsGroup/CategoryQuestionGroup";
import TimeQuestionGroup from "./sittingsGroup/TimeQuestionGroup";
import NotactiveSittings from "./sittingsGroup/NotactiveSittings";
import { useGetTypeGroupQuery } from "../store/api/type/type.api";
import { useGetTimeGroupQuery } from "../store/api/time/time.api";
import { useGetCategoryGroupsQuery } from "../store/api/category/category.api";

interface SettingsGroupProps {
  group: bigint;
}

export default function SettingsGroup({ group }: SettingsGroupProps) {
  const tg = window.Telegram.WebApp;

  const { data: dataGroupInfo } = useGetInfoGroupsQuery(group);
  const { data: dataGroupDb } = useGetGroupDbQuery(group);

  const { data: dataGroupType } = useGetTypeGroupQuery(
    dataGroupDb?.question_type || 0
  );
  const { data: dataGroupTime } = useGetTimeGroupQuery(dataGroupDb?.time || 0);
  const { data: dataGroupCategory } = useGetCategoryGroupsQuery(group);

  return (
    <>
      {dataGroupInfo && dataGroupDb && (
        <form className="text-center py-24">
          <h3 className="text-sm font-medium text-[var(--tg-theme-text-color)] text-left">
            Настройки викторины в группе "{dataGroupInfo.title}"
          </h3>
          <ul
            role="list"
            className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
          >
            {dataGroupType && (
              <li className="py-4 px-0">
                <TypeQuestionGroup typeGroup={dataGroupType} />
              </li>
            )}
            {dataGroupCategory && (
              <li className="py-4 px-0">
                <CategoryQuestionGroup category={dataGroupCategory} />
              </li>
            )}
            {dataGroupTime && (
              <li className="py-4 px-0">
                <TimeQuestionGroup timeGroup={dataGroupTime} />
              </li>
            )}
            <li className="py-4 px-0 cursor-not-allowed">
              <NotactiveSittings type={"Сложность вопросов"} />
            </li>
            <li className="py-4 px-0 cursor-not-allowed">
              <NotactiveSittings type={"Период жизни вопроса"} />
            </li>
            <li className="py-4 px-0 cursor-not-allowed">
              <NotactiveSittings type={"Ежедневная статистика"} />
            </li>
          </ul>
        </form>
      )}
    </>
  );
}
