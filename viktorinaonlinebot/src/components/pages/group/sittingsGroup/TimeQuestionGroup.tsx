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

interface ITimesInteface {
  id: number;
  time: number;
  name: string;
  active: boolean;
}

export default function TimeQuestionGroup() {
  const allTimes = [
    { id: 0, time: 0, name: "00:00", active: false },
    { id: 1, time: 0, name: "01:00", active: false },
    { id: 2, time: 0, name: "02:00", active: false },
    { id: 3, time: 0, name: "03:00", active: false },
    { id: 4, time: 0, name: "04:00", active: false },
    { id: 5, time: 0, name: "05:00", active: false },
    { id: 6, time: 0, name: "06:00", active: false },
    { id: 7, time: 0, name: "07:00", active: false },
    { id: 8, time: 0, name: "08:00", active: false },
    { id: 9, time: 0, name: "09:00", active: false },
    { id: 10, time: 0, name: "10:00", active: false },
    { id: 11, time: 0, name: "11:00", active: false },
    { id: 12, time: 0, name: "12:00", active: false },
    { id: 13, time: 0, name: "13:00", active: false },
    { id: 14, time: 0, name: "14:00", active: false },
    { id: 15, time: 0, name: "15:00", active: false },
    { id: 16, time: 0, name: "16:00", active: false },
    { id: 17, time: 0, name: "17:00", active: false },
    { id: 18, time: 0, name: "18:00", active: false },
    { id: 19, time: 0, name: "19:00", active: false },
    { id: 20, time: 0, name: "20:00", active: false },
    { id: 21, time: 0, name: "21:00", active: false },
    { id: 22, time: 0, name: "22:00", active: false },
    { id: 23, time: 0, name: "23:00", active: false },
  ];
  const chat = useAppSelector(selectModalData);
  const { data: GroupDb } = useGetGroupDbQuery(chat);
  const { data: GroupTime } = useGetTimeByIdQuery(GroupDb?.time || 0);
  const [times, setTimes] = useState(2);

  // let hour: number
  // GroupTime ? hour = GroupTime.period / 1000 : 25

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  let newArr: ITimesInteface[];
  console.log(times);

  function hendleTimes(id: number) {
    // console.log(id);
    // times.map((time) => {
    //   time.id === id ? (time.active = true) : (time.active = false);
    // });
    // console.log(times);
    // setTimes(times);
    
    setTimes(id);
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
                <RadioGroup value={times} onChange={setTimes} className="mt-2">
                  <div className="grid grid-cols-6 gap-2">
                    {allTimes.map((time) => (
                      <RadioGroup.Option
                        key={time.id}
                        value={time.id}
                        onClick={() => hendleTimes(time.id)}
                        className={({ active, checked }) =>
                          classNames(
                            time.active === true
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
