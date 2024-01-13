import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { IType } from "../models/IType";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

interface SettingsTypeQuestionGroupProps {
  dataType: IType[];
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  selectionChanged: () => void;
}

export default function SettingsTypeQuestionGroup({
  dataType,
  type,
  setType,
  selectionChanged,
}: SettingsTypeQuestionGroupProps) {
  const tg = window.Telegram.WebApp;
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <li className="py-4 px-0">
              <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                    Вид вопросов
                  </div>
                  <span className="text-xs leading-5 text-[var(--tg-theme-hint-color)]">
                    Тукущий вид: {type}
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
                <RadioGroup value={type} onChange={setType}>
                  <div className="-space-y-px rounded-md">
                    {dataType &&
                      dataType.map((type) => (
                        <RadioGroup.Option
                          key={type.id}
                          value={type.name}
                          className={({ checked }) =>
                            classNames(
                              checked
                                ? "z-10 border-2 border-[var(--tg-theme-text-color)]"
                                : " border-1 border-[var(--tg-theme-hint-color)]",
                              "relative flex cursor-pointer border p-4"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <span
                                className={classNames(
                                  checked
                                    ? "bg-[var(--tg-theme-accent-text-color)] border-transparent"
                                    : "border-[var(--tg-theme-accent-text-color)]",
                                  Boolean(active)
                                    ? "ring-2 ring-offset-2 ring-[var(--tg-theme-accent-text-color)]"
                                    : "",
                                  "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"
                                )}
                                aria-hidden="true"
                              >
                                <span className="rounded-full w-1.5 h-1.5" />
                              </span>
                              <span className="ml-3 flex flex-col">
                                <RadioGroup.Label
                                  as="span"
                                  className={classNames(
                                    checked
                                      ? "text-[var(--tg-theme-text-color)] font-bold" 
                                      : "text-[var(--tg-theme-hint-color)] font-medium",
                                    "block text-sm"
                                  )}
                                >
                                  {type.description}
                                </RadioGroup.Label>
                              </span>
                            </>
                          )}
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
