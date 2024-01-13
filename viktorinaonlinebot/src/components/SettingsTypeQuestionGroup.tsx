import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { IType } from "../models/IType";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

interface GroupsListItemProps {
  dataType: IType[];
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}

export default function SettingsTypeQuestionGroup({
  dataType,
  type,
  setType,
}: GroupsListItemProps) {
  const tg = window.Telegram.WebApp;
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
      <Disclosure as="div">
        {({ open }) => (
          <>
            <li className="py-4 px-0">
              <Disclosure.Button className="group relative flex w-full items-start justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)] text-left">
                    Вид вопросов
                  </div>
                  <span className="text-xs leading-5 text-[var(--tg-theme-text-color)]">
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
              <div className="space-y-6">
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
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
