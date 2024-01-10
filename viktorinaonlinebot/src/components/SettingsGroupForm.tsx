import { useState } from "react";
import ErrorLoad from "./ErrorLoad";
import GroupAvatar from "./GroupAvatar";
import { useGetInfoGroupsQuery } from "./store/api/groups.slice";
import { RadioGroup } from "@headlessui/react";
import { useGetTypeQuery } from "./store/api/questionType.slice";
interface SettingsGroupProps {
  group: number;
}
export default function SettingsGroupForm({ group }: SettingsGroupProps) {
  const { isError: errorType, data: dataType } = useGetTypeQuery("");

  const { isError: errorGroupInfo, data: dataGroupInfo } =
    useGetInfoGroupsQuery(group);

  const tg = window.Telegram.WebApp;

  const [type, setType] = useState();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  function selectionChanged() {
    tg.HapticFeedback.selectionChanged();
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
          <input
            onChange={() => selectionChanged()}
            type="range"
            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
            min="0"
            max="5"
            step="0.5"
          />
          <div className="p-2">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium leading-6 text-gray-900">
                RAM
              </h2>
              <a
                href="#"
                className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
              >
                See performance specs
              </a>
            </div>

            <RadioGroup value={type} onChange={setType} className="mt-2">
              <RadioGroup.Label className="sr-only">
                Choose a memory option
              </RadioGroup.Label>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {dataType &&
                  dataType.map((option) => (
                    <RadioGroup.Option
                      key={option.id}
                      value={option}
                      className={({ active, checked }) =>
                        classNames(
                          option.active
                            ? "cursor-pointer focus:outline-none"
                            : "cursor-not-allowed opacity-25",
                          active ? "ring-2 ring-indigo-600 ring-offset-2" : "",
                          checked
                            ? "bg-indigo-600 text-white hover:bg-indigo-500"
                            : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50",
                          "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1"
                        )
                      }
                      disabled={!option.active}
                    >
                      <RadioGroup.Label as="span">
                        {option.name}
                      </RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
              </div>
            </RadioGroup>
          </div>
        </form>
      )}
      {errorGroupInfo && <ErrorLoad />}
    </>
  );
}
