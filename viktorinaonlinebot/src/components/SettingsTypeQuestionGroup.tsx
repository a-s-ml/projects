import {
  PhotoIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { IType } from "../models/IType";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { useUpdateTypeGroupsMutation } from "./store/api/groups.slice";
import { useAppSelector } from "./store";
import { selectModalData } from "./store/api/modal.slice";

interface SettingsTypeQuestionGroupProps {
  dataType: IType[];
  typeGroup: string;
}

export default function SettingsTypeQuestionGroup({
  dataType,
  typeGroup 
}: SettingsTypeQuestionGroupProps) {
  const tg = window.Telegram.WebApp;
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  
  const [typeState, setType] = useState(typeGroup);
  const chat = useAppSelector(selectModalData);
  const [updateTypeGroup, {}] = useUpdateTypeGroupsMutation();

  function typeChanged(type: string, question_type: number) {
    updateTypeGroup({ chat, question_type });
    setType(type);
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
                    <PhotoIcon
                      className="h-5 w-5 text-[var(--tg-theme-accent-text-color)]"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
                    Вид вопросов
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
                <RadioGroup value={typeState} onChange={setType} className="mt-2">
                  <div className="grid grid-cols-3 gap-2">
                    {dataType &&
                      dataType.map((type) => (
                        <RadioGroup.Option
                          key={type.id}
                          value={type.name}
                          onClick={() => typeChanged(type.name, type.id)}
                          className={({ active, checked }) =>
                            classNames(
                              Boolean(type.active)
                                ? "cursor-pointer"
                                : "cursor-not-allowed opacity-25",
                              active
                                ? "ring-2 ring-[var(--tg-theme-accent-text-color)] ring-offset-2"
                                : "",
                              checked
                                ? "bg-[var(--tg-theme-accent-text-color)] text-white font-extrabold"
                                : "ring-1 ring-inset ring-[var(--tg-theme-hint-color)] bg-white text-black font-semibold",
                              "flex items-center justify-center rounded-md py-2 px-2 text-xs"
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
