import {
  PhotoIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { useAppSelector } from "../../store";
import { selectModalData } from "../../store/api/modal.slice";
import {
  useGetTypeByIdQuery,
  useUpdateTypeGroupsMutation,
} from "../../store/api/type/type.api";
import { selectAllType } from "../../store/api/type/type.slice";
import { useGetGroupDbQuery } from "../../store/api/group.api";

export default function TypeGroup() {
  const allTypes = useAppSelector(selectAllType);
  const chat = useAppSelector(selectModalData);

  const { data: GroupDb } = useGetGroupDbQuery(chat);

  const { data: GroupType } = useGetTypeByIdQuery(GroupDb?.question_type || 0);

  const tg = window.Telegram.WebApp;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const [typeState, setType] = useState(GroupType?.id);

  const [updateTypeGroup, {}] = useUpdateTypeGroupsMutation();

  function typeChanged(question_type: number) {
    setType(question_type);
    updateTypeGroup({ chat, question_type });
    tg.HapticFeedback.selectionChanged();
  }

  console.log('typeState', typeState)

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
            <Disclosure.Panel className="py-4">
              <div className="space-y-1.5">
                <RadioGroup
                  value={typeState}
                  onChange={setType}
                  className="mt-2"
                >
                  <div className="grid grid-cols-3 gap-2">
                    {allTypes &&
                      allTypes.all.map((type) => (
                        <RadioGroup.Option
                          key={type.id}
                          value={type.id}
                          onClick={() => typeChanged(type.id)}
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
