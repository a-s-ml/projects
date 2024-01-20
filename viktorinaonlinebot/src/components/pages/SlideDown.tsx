import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Preloader from "../Preloader/Preloader";
import SwipeToDelete from "../hooks/SwipeToDelete";

interface SlideDownProps {
  slide: boolean;
}

export default function SlideDown({ slide }: SlideDownProps) {
  const tg = window.Telegram.WebApp;

  const [slideState, setSlide] = useState(slide);
  if (slide) {
    tg.HapticFeedback.notificationOccurred("success");
  }

  const color = () => Math.ceil(Math.random() * 250);

  const arrItems = [
    {
      content: "Item 1",
    },
    {
      content: "Item 2",
    },
    {
      content: "Item 3",
    },
  ];

  const [items, setItems] = useState(arrItems);

  return (
    <>
      <Transition.Root show={slideState} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setSlide(!slideState)}
        >
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-y-full opacity-5"
              enterTo="translate-y-0 opacity-100"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-full opacity-5"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen">
                <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                  <Preloader />
                  {items.map((item) => (
                    <SwipeToDelete
                      key={item.content}
                      height={50}
                      onDelete={() =>
                        setItems((items) =>
                          items.filter((i) => i.content !== item.content)
                        )
                      }
                    >
                      <span className="flex justify-start items-center h-[50px] pl-3 w-full border-box relative">
                        <span>{item.content}</span>
                      </span>
                    </SwipeToDelete>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
