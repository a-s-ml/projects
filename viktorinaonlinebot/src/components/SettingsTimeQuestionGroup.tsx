import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import { ITime } from "../models/ITime";
import { useAppSelector } from "./store";
import { selectTimes } from "./store/api/times.slice";

interface SettingsTimeQuestionGroupProps {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}

export default function SettingsTimeQuestionGroup({
  time,
  setTime
}: SettingsTimeQuestionGroupProps) {
  const tg = window.Telegram.WebApp;
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  
  function timeChanged(time: number) {
    setTime(time)
    tg.HapticFeedback.selectionChanged();
    tg.MainButton.setText("Применить");
    tg.MainButton.show();
  }


  const times = useAppSelector(selectTimes);
  console.log(times)

  return (
    <>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <li className="py-4 px-0">
              <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]">
                    Период публикаций
                  </div>
                  <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
                    Тукущий период: {time}
                  </span>
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
                <RadioGroup value={time} onChange={setTime} className="mt-2">
                  <div className="grid grid-cols-4 gap-2">
                    {times.map((time) => (
                        <RadioGroup.Option
                          key={time.id}
                          value={time.period}
                          onClick={() => timeChanged(time.period)}
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
