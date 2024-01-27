import {
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store";
import {
  useGetTimeByIdQuery,
  useUpdateTimeGroupsMutation,
} from "../../../store/api/time/time.api";
import { selectModalData } from "../../../store/api/modal.slice";
import { useGetGroupDbQuery } from "../../../store/api/group.api";

interface ITimesInteface {
  id: number;
  time: number;
  name: string;
  active: boolean;
}

export default function TimeQuestionGroup() {
  const allTimes = [
    { id: 0, time: 0, name: "00:00", active: false, disabled: false },
    { id: 1, time: 1, name: "01:00", active: false, disabled: false },
    { id: 2, time: 2, name: "02:00", active: false, disabled: false },
    { id: 3, time: 3, name: "03:00", active: false, disabled: false },
    { id: 4, time: 4, name: "04:00", active: false, disabled: false },
    { id: 5, time: 5, name: "05:00", active: false, disabled: false },
    { id: 6, time: 6, name: "06:00", active: false, disabled: false },
    { id: 7, time: 7, name: "07:00", active: false, disabled: false },
    { id: 8, time: 8, name: "08:00", active: false, disabled: false },
    { id: 9, time: 9, name: "09:00", active: false, disabled: false },
    { id: 10, time: 10, name: "10:00", active: false, disabled: false },
    { id: 11, time: 11, name: "11:00", active: false, disabled: false },
    { id: 12, time: 12, name: "12:00", active: false, disabled: false },
    { id: 13, time: 13, name: "13:00", active: false, disabled: false },
    { id: 14, time: 14, name: "14:00", active: false, disabled: false },
    { id: 15, time: 15, name: "15:00", active: false, disabled: false },
    { id: 16, time: 16, name: "16:00", active: false, disabled: false },
    { id: 17, time: 17, name: "17:00", active: false, disabled: false },
    { id: 18, time: 18, name: "18:00", active: false, disabled: false },
    { id: 19, time: 19, name: "19:00", active: false, disabled: false },
    { id: 20, time: 20, name: "20:00", active: false, disabled: false },
    { id: 21, time: 21, name: "21:00", active: false, disabled: false },
    { id: 22, time: 22, name: "22:00", active: false, disabled: false },
    { id: 23, time: 23, name: "23:00", active: false, disabled: false },
  ];
  const chat = useAppSelector(selectModalData);
  const { data: GroupDb } = useGetGroupDbQuery(chat);
  const { data: GroupTime } = useGetTimeByIdQuery(GroupDb?.time || 0);
  const [times, setTimes] = useState(0);

  let hours: Array<number> = [];

  // function compareNumeric(a: number, b: number) {
  //   if (a > b) return 1;
  //   if (a === b) return 0;
  //   return -1;
  // }

  useEffect(() => {
    let period: number;
    GroupTime ? (period = GroupTime.period / 3600) : (period = 25);
    for (let b = times - period; b > 0; b -= period) {
      hours.push(b);
    }
    for (let a = times; a < 24; a += period) {
      hours.push(a);
    }

    // hours.sort(compareNumeric);
    console.log("hours", hours);
  }, [GroupTime, times]);

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
            <b className="text-left text-red-600 text-xs font-light">Внимание! Настройка времени находится на доработке, изменения не применяются</b>
              <div className="space-y-1.5">
                <div className="grid grid-cols-6 gap-2">
                  {allTimes.map((time) => (
                    <button
                      type="button"
                      value={time.id}
                      onClick={() => setTimes(time.id)}
                      className={`flex items-center justify-center rounded-md py-2 px-2 text-xs cursor-pointer ${
                        hours.includes(time.time)
                          ? "bg-[var(--tg-theme-accent-text-color)] text-white font-extrabold"
                          : "ring-1 ring-inset ring-[var(--tg-theme-hint-color)] bg-white text-black font-semibold"
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

{
  /* <div className="grid grid-cols-6 gap-2">
{times.map((time) => (
  <button
    type="button"
    value={time.id}
    onClick={(e) => hendleTimes(e.target.value)}
    className={`flex items-center justify-center rounded-md py-2 px-2 text-xs cursor-pointer ${
      time.active === true 
        ? "bg-[var(--tg-theme-accent-text-color)] text-white font-extrabold"
        : "ring-1 ring-inset ring-[var(--tg-theme-hint-color)] bg-white text-black font-semibold"
    }`}
  >
    {time.name}
  </button>
))}
</div> */
}
