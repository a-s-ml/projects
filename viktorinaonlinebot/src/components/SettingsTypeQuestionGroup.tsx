import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { IType } from "../models/IType";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

interface GroupsListItemProps {
  dataType: IType[];
  dataGroupType: IType;
}

export default function SettingsTypeQuestionGroup({
  dataType,
  dataGroupType,
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
  const [type, setType] = useState(dataGroupType?.name || "text");
  console.log(type);
  return (
    <li className="py-4 px-0">
      <div className="group relative flex items-start space-x-3">
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-[var(--tg-theme-text-color)]">
            <b>Вид вопросов</b>
          </div>
        </div>
        <div className="flex-shrink-0 self-center text-right">
          <ChevronDoubleDownIcon />
        </div>
      </div>
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
  );
}
