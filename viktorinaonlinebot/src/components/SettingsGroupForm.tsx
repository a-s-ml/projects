import { useState } from "react";
import GroupAvatar from "./GroupAvatar";
import { RadioGroup } from "@headlessui/react";
import {
  useGetGroupDbQuery,
  useGetInfoGroupsQuery,
} from "./store/api/groups.slice";
import {
  useGetTimeGroupQuery,
  useGetTimeQuery,
  useGetTypeGroupQuery,
  useGetTypeQuery,
} from "./store/api/vik.api";

interface SettingsGroupProps {
  group: number;
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

  const { data: dataGroupType } = useGetTypeGroupQuery(dataGroupDb?.question_type || 0);
  const { data: dataGroupTime } = useGetTimeGroupQuery(dataGroupDb?.time || 0);
  
  const [type, setType] = useState(dataGroupType?.name);
  const [time, setTime] = useState(dataGroupTime?.period);

  console.log(dataGroupInfo)
  console.log(dataGroupDb)
  console.log(dataType)
  console.log(dataTime)
  console.log(dataGroupType)
  console.log(dataGroupTime)
  console.log(type)
  console.log(time)

  return (
    <>
      {dataGroupInfo && dataType && dataTime && dataGroupDb && (
        <form className="text-center">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
            {dataGroupInfo.photo?.small_file_id && (
              <GroupAvatar id={dataGroupInfo.photo?.small_file_id} />
            )}
          </div>
          <h3 className="text-sm font-medium text-[var(--tg-theme-text-color)]">
            Настройки викторины в группе "{dataGroupInfo.title}"
          </h3>
          <ul
            role="list"
            className="mt-4 divide-y divide-[var(--tg-theme-hint-color)]"
          >
            <li className="py-4 px-0">
              <h3 className="text-sm font-medium text-left text-[var(--tg-theme-text-color)]">
                Вид вопросов
              </h3>
              <div className="flex items-center justify-between">
                <span
                  onClick={() =>
                    tg.openTelegramLink("https://t.me/ViktorinaOnlineChannel")
                  }
                  className="cursor-pointer text-sm font-medium leading-6 text-[var(--tg-theme-accent-text-color)]"
                >
                  Посмотреть пример
                </span>
              </div>

              <RadioGroup value={type} onChange={setType} className="mt-2">
                <RadioGroup.Label className="sr-only">
                  Choose a memory option
                </RadioGroup.Label>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {dataType &&
                    dataType.map((type) => (
                      <RadioGroup.Option
                        key={type.id}
                        value={type.name}
                        onClick={() => selectionChanged()}
                        className={({ active, checked }) =>
                          classNames(
                            Boolean(type.active)
                              ? "cursor-pointer"
                              : "cursor-not-allowed opacity-25",
                            active
                              ? "ring-2 ring-[var(--tg-theme-accent-text-color)] ring-offset-2"
                              : "",
                            checked
                              ? "bg-[var(--tg-theme-accent-text-color)] text-white"
                              : "ring-1 ring-inset ring-[var(--tg-theme-hint-color)] bg-white text-black",
                            "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase"
                          )
                        }
                        disabled={!Boolean(type.active)}
                      >
                        <RadioGroup.Label as="span">
                          {type.description}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                </div>
              </RadioGroup>
            </li>
            <li className="py-4 px-0">
              <h3 className="text-sm font-medium text-left text-[var(--tg-theme-text-color)]">
                Период публикаций
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium leading-6 text-[var(--tg-theme-accent-text-color)]">
                  Время: {time}
                </span>
              </div>
              <div className="relative mb-6">
                <label htmlFor="labels-range-input" className="sr-only">
                  Labels range
                </label>
                <input
                  id="labels-range-input"
                  onChange={() => selectionChanged()}
                  type="range"
                  value={time}
                  className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                  min={dataTime[0].period}
                  max={dataTime[dataTime.length - 1].period}
                  step="3600"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start- -bottom-6"></span>
                {dataTime.map((time) => (
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    {time.period}
                  </span>
                ))}
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6"></span>
              </div>
            </li>
            <li className="py-4 px-0">
              <h3 className="text-sm font-medium text-left text-[var(--tg-theme-text-color)]">
                Категории
              </h3>
            </li>
          </ul>
        </form>
      )}
    </>
  );
}
