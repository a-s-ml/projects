import { useEffect, useState } from "react";
import {
  useGetGroupDbQuery,
  useGetInfoGroupsQuery,
} from "./store/api/group.api";
import SettingsTypeQuestionGroup from "./SettingsTypeQuestionGroup";
import SettingsCategoryQuestionGroup from "./SettingsCategoryQuestionGroup";
import SettingsTimeQuestionGroup from "./SettingsTimeQuestionGroup";
import SittingsNotactiveQuestionGroup from "./SittingsNotactiveQuestionGroup";
import { useGetTypeGroupQuery, useGetTypeQuery } from "./store/api/type.api";
import { useGetTimeGroupQuery, useGetTimeQuery } from "./store/api/time.api";
import {
  useGetCategoryGroupsQuery,
  useGetCategoryQuery,
} from "./store/api/category.api";

interface SettingsGroupProps {
  group: bigint;
}

export default function SettingsGroupForm({ group }: SettingsGroupProps) {
  const tg = window.Telegram.WebApp;

  const { data: dataGroupInfo } = useGetInfoGroupsQuery(group);
  const { data: dataGroupDb } = useGetGroupDbQuery(group);
  const { data: dataTime } = useGetTimeQuery(0);
  const { data: dataCategory } = useGetCategoryQuery("");

  const { data: dataGroupType } = useGetTypeGroupQuery(
    dataGroupDb?.question_type || 0
  );
  const { data: dataGroupTime } = useGetTimeGroupQuery(dataGroupDb?.time || 0);
  const { data: dataGroupCategory } = useGetCategoryGroupsQuery(group);

  return (
    <>
      {dataGroupInfo && dataTime && dataGroupDb && (
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
                <SettingsTypeQuestionGroup typeGroup={dataGroupType} />
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
            {dataGroupTime && (
              <li className="py-4 px-0">
                <SettingsTimeQuestionGroup
                  dataTime={dataTime}
                  timeGroup={dataGroupTime}
                />
              </li>
            )}
            <li className="py-4 px-0 cursor-not-allowed">
              <SittingsNotactiveQuestionGroup type={"Сложность вопросов"} />
            </li>
            <li className="py-4 px-0 cursor-not-allowed">
              <SittingsNotactiveQuestionGroup type={"Период жизни вопроса"} />
            </li>
            <li className="py-4 px-0 cursor-not-allowed">
              <SittingsNotactiveQuestionGroup type={"Ежедневная статистика"} />
            </li>
          </ul>
        </form>
      )}
    </>
  );
}
