import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ErrorPage from "../ErrorPage";
import GroupsList from "../GroupsList";
import {
  selectSlide,
  selectSlideData,
  showSlide,
} from "../store/api/slide.slice";
import { useAppDispatch, useAppSelector } from "../store";

interface SlideItemsProps {
  chat: number;
}

export default function SlidePage({ chat }: SlideItemsProps) {
  const slide = useAppSelector(selectSlide);
  const slideData = useAppSelector(selectSlideData);
  const dispatch = useAppDispatch();
  const tg = window.Telegram.WebApp;

  if (slide) {
    tg.HapticFeedback.notificationOccurred('success')
    tg.BackButton.show();
    tg.onEvent("backButtonClicked", () => dispatch(showSlide(false)));
  }

  return (
    <>
      <Transition.Root show={slide} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => dispatch(showSlide(true))}
        >
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen">
                    <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                      {slideData === "groups" && <GroupsList chat={chat} />}
                      {slideData === "questions" && <ErrorPage />}
                      {slideData === "answers" && <ErrorPage />}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
