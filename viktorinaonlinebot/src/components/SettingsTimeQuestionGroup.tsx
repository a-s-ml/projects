import { ClockIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { ITime } from "../models/ITime";
import { useUpdateTimeGroupsMutation } from "./store/api/groups.slice";
import { useAppSelector } from "./store";
import { selectModalData } from "./store/api/modal.slice";

interface SettingsTimeQuestionGroupProps {
  dataTime: ITime[];
  timeGroup: number;
}

export default function SettingsTimeQuestionGroup({
  dataTime,
  timeGroup
}: SettingsTimeQuestionGroupProps) {
  const tg = window.Telegram.WebApp;
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  
  const [timeState, setTime] = useState(timeGroup);

  const chat = useAppSelector(selectModalData);
  const [updateTimeGroup, {}] = useUpdateTimeGroupsMutation();

  function timeChanged(time: number) {
    setTime(time)
    updateTimeGroup({chat, time})
    tg.HapticFeedback.selectionChanged();
  }

  return (
    <>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <li className="py-4 px-0">
              <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
              <div className="flex-shrink-0">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg">
                    <ClockIcon
                      className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                    Период публикаций
                  </div>
                </div>
                <div className="flex-shrink-0 self-center text-right">
                  {open ? (
                    <ChevronUpIcon
                      className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </Disclosure.Button>
            </li>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-1.5">
                <RadioGroup value={timeState} onChange={setTime} className="mt-2">
                  <div className="grid grid-cols-4 gap-2">
                    {dataTime &&
                      dataTime.map((time) => (
                        <RadioGroup.Option
                          key={time.id}
                          value={time.name}
                          onClick={() => timeChanged(time.id)}
                          className={({ checked }) =>
                            classNames(
                              checked
                                ? "bg-[var(--tg-theme-accent-text-color)] text-white font-extrabold"
                                : "ring-1 ring-inset ring-[var(--tg-theme-hint-color)] bg-white text-black font-semibold",
                              "flex items-center justify-center rounded-md py-2 px-2 text-xs cursor-pointer"
                            )
                          }
                        >
                          <RadioGroup.Label as="span">
                            {time.name}
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                  </div>
                </RadioGroup>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
