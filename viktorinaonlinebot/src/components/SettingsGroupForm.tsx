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

interface SettingsGroupProps {
  group: bigint;
}

export default function SettingsGroupForm({ group }: SettingsGroupProps) {
  const tg = window.Telegram.WebApp;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  function selectionChanged() {
    tg.HapticFeedback.selectionChanged();
    tg.MainButton.setText("Применить");
    tg.MainButton.show();
  }

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

  function rangeChange(e: any) {
    setTime(e.target.value);
  }
  const [type, setType] = useState(dataGroupType?.name || "text");

  console.log(dataGroupInfo);
  console.log(dataGroupDb);
  console.log(dataType);
  console.log(dataTime);
  console.log(dataCategory);
  console.log(dataGroupType);
  console.log(dataGroupTime);
  console.log(dataGroupCategory);
  console.log(type);
  console.log(time);

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
                  selectionChanged={selectionChanged}
                />
              </li>
            )}
            {dataGroupCategory && dataCategory && (
              <li className="py-4 px-0">
                <SettingsCategoryQuestionGroup
                  dataCategory={dataCategory}
                  dataGroupCategory={dataGroupCategory}
                  selectionChanged={selectionChanged}
                />
              </li>
            )}
            {dataGroupType && (
              <li className="py-4 px-0">
                <SettingsTimeQuestionGroup
                  dataTime={dataTime}
                  time={time}
                  setTime={setTime}
                  selectionChanged={selectionChanged}
                />
              </li>
            )}
          </ul>
        </form>
      )}
    </>
  );
}
