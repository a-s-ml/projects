import { Fragment, SetStateAction, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ErrorPage from "../ErrorPage";
import GroupsList from "../GroupsList";
import QuestionsList from "../QuestionsList";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../store/features/counter/counterSlice";

interface SlideItemsProps {
  slideData: string;
  toggleStateS: boolean;
  toggleS(n: string): void;
  chat: number;
}

export default function SlidePage({
  toggleStateS,
  toggleS,
  slideData,
  chat,
}: SlideItemsProps) {
  const tg = window.Telegram.WebApp;
  tg.onEvent("backButtonClicked", () => toggleS(""));

  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <span>{count}</span>
      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => dispatch(incrementByAmount(incrementValue))}
      >
        Add Amount
      </button>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        -
      </button>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <Transition.Root show={toggleStateS} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => toggleS("")}>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen">
                    <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                      {slideData === "groups" && <GroupsList chat={chat} />}
                      {slideData === "questions" && (
                        <QuestionsList chat={chat} />
                      )}
                      {slideData === "answers" && <ErrorPage />}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* <ModalPage /> */}
    </>
  );
}
