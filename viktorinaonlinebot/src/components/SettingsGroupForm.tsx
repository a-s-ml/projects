import { useState } from "react";
import {
  useGetGroupDbQuery,
  useGetInfoGroupsQuery,
} from "./store/api/groups.slice";
import {
  useGetCategoryGroupsQuery,
  useGetCategoryQuery,
  useGetTimeGroupQuery,
  useGetTimeQuery,
  useGetTypeGroupQuery,
  useGetTypeQuery,
} from "./store/api/vik.api";
import SettingsTypeQuestionGroup from "./SettingsTypeQuestionGroup";
import SettingsCategoryQuestionGroup from "./SettingsCategoryQuestionGroup";
import SettingsTimeQuestionGroup from "./SettingsTimeQuestionGroup";
import SittingsNotactiveQuestionGroup from "./SittingsNotactiveQuestionGroup";

interface SettingsGroupProps {
  group: bigint;
}

export default function SettingsGroupForm({ group }: SettingsGroupProps) {
  const tg = window.Telegram.WebApp;

  const { data: dataGroupInfo } = useGetInfoGroupsQuery(group);
  const { data: dataGroupDb } = useGetGroupDbQuery(group);
  const { data: dataType } = useGetTypeQuery("");
  const { data: dataTime } = useGetTimeQuery(0);
  const { data: dataCategory } = useGetCategoryQuery("");

  const { data: dataGroupType } = useGetTypeGroupQuery(
    dataGroupDb?.question_type || 0
  );
  const { data: dataGroupTime } = useGetTimeGroupQuery(dataGroupDb?.time || 0);
  const { data: dataGroupCategory } = useGetCategoryGroupsQuery(group);

  const [time, setTime] = useState(dataGroupTime?.period || 3600);

  const [type, setType] = useState(dataGroupType?.name || "text");

  return (
    <>
      {dataGroupInfo && dataType && dataTime && dataGroupDb && (
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
                <SettingsTypeQuestionGroup
                  dataType={dataType}
                  type={type}
                  setType={setType}
                />
              </li>
            )}
            {dataGroupCategory && dataCategory && (
              <li className="py-4 px-0">
                <SettingsCategoryQuestionGroup
                  dataCategory={dataCategory}
                  category={dataGroupCategory}
                />
              </li>
            )}
            {dataGroupType && (
              <li className="py-4 px-0">
                <SettingsTimeQuestionGroup
                  dataTime={dataTime}
                  time={time}
                  setTime={setTime}
                />
              </li>
            )}
            <li className="py-4 px-0 cursor-not-allowed">
              <SittingsNotactiveQuestionGroup
                type={"Сложность вопросов"}
                description={"сложности вопросов"}
              />
            </li>
            <li className="py-4 px-0 cursor-not-allowed">
              <SittingsNotactiveQuestionGroup
                type={"Период жизни вопроса"}
                description={"периода жизни вопросов"}
              />
            </li>
            <li className="py-4 px-0 cursor-not-allowed">
              <SittingsNotactiveQuestionGroup
                type={"Ежедневная статистика"}
                description={"ежедневной статистики"}
              />
            </li>
          </ul>
        </form>
      )}
    </>
  );
}
