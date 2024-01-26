import {
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { useAppSelector } from "../../../store";
import {
  useGetTimeByIdQuery,
  useUpdateTimeGroupsMutation,
} from "../../../store/api/time/time.api";
import { selectModalData } from "../../../store/api/modal.slice";
import { useGetGroupDbQuery } from "../../../store/api/group.api";

export default function TimeQuestionGroup() {
  const allTimes = [
    { id: 0, time: 0, name: "00:00" },
    { id: 1, time: 0, name: "01:00" },
    { id: 2, time: 0, name: "02:00" },
    { id: 3, time: 0, name: "03:00" },
    { id: 4, time: 0, name: "04:00" },
    { id: 5, time: 0, name: "05:00" },
    { id: 6, time: 0, name: "06:00" },
    { id: 7, time: 0, name: "07:00" },
    { id: 8, time: 0, name: "08:00" },
    { id: 9, time: 0, name: "09:00" },
    { id: 10, time: 0, name: "10:00" },
    { id: 11, time: 0, name: "11:00" },
    { id: 12, time: 0, name: "12:00" },
    { id: 13, time: 0, name: "13:00" },
    { id: 14, time: 0, name: "14:00" },
    { id: 15, time: 0, name: "15:00" },
    { id: 16, time: 0, name: "16:00" },
    { id: 17, time: 0, name: "17:00" },
    { id: 18, time: 0, name: "18:00" },
    { id: 19, time: 0, name: "19:00" },
    { id: 20, time: 0, name: "20:00" },
    { id: 21, time: 0, name: "21:00" },
    { id: 22, time: 0, name: "22:00" },
    { id: 23, time: 0, name: "23:00" },
  ];
  const chat = useAppSelector(selectModalData);
  const { data: GroupDb } = useGetGroupDbQuery(chat);
  const { data: GroupTime } = useGetTimeByIdQuery(GroupDb?.time || 0);

  const tg = window.Telegram.WebApp;

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [timeState, setTime] = useState(GroupTime?.id);

  const [updateTimeGroup, {}] = useUpdateTimeGroupsMutation();

  function timeChanged(time: number) {
    setTime(time);
    updateTimeGroup({ chat, time });
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
                    Время публикаций
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
                <div className="grid grid-cols-6 gap-2">
                  {allTimes.map((time) => (
                    <button
                      type="button"
                      className={`flex items-center justify-center rounded-md py-2 px-2 text-xs cursor-pointer ${
                        time.id === 2 ? "bg-[var(--tg-theme-accent-text-color)] text-white font-extrabold" : "ring-1 ring-inset ring-[var(--tg-theme-hint-color)] bg-white text-black font-semibold"
                      }`}
                    >
                      {time.name}
                    </button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
