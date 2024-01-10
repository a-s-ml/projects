import { useState } from "react";
import ErrorLoad from "./ErrorLoad";
import GroupAvatar from "./GroupAvatar";
import { RadioGroup } from "@headlessui/react";
import { useGetInfoGroupsQuery } from "./store/api/groups.slice";
import { useGetTimeQuery, useGetTypeQuery } from "./store/api/vik.api";

interface SettingsGroupProps {
  group: number;
}

export default function SettingsGroupForm({ group }: SettingsGroupProps) {
  const tg = window.Telegram.WebApp;

  const { isError: errorType, data: dataType } = useGetTypeQuery("");
  const { isError: errorTime, data: dataTime } = useGetTimeQuery(0);

  const { isError: errorGroupInfo, data: dataGroupInfo } =
    useGetInfoGroupsQuery(group);

  const [type, setType] = useState();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  function selectionChanged() {
    tg.HapticFeedback.selectionChanged();
    tg.MainButton.setText("Применить");
    tg.MainButton.show();
  }

  return (
    <>
      {dataGroupInfo && ( 
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
                  className="text-sm font-medium leading-6 text-[var(--tg-theme-accent-text-color)]"
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
              <input
                onChange={() => selectionChanged()}
                type="range"
                className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                min="0"
                max="5"
                step="0.5"
              />
            </li>
            <li className="py-4 px-0">
              <h3 className="text-sm font-medium text-left text-[var(--tg-theme-text-color)]">
                Категории
              </h3>
            </li>
          </ul>
        </form>
      )}
      {errorGroupInfo && <ErrorLoad />}
    </>
  );
}
