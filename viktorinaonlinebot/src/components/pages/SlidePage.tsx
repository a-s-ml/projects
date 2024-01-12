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
import { Bars3Icon } from "@heroicons/react/24/outline";

interface SlideItemsProps {
  chat: number;
}

export default function SlidePage({ chat }: SlideItemsProps) {
  const slide = useAppSelector(selectSlide);
  const slideData = useAppSelector(selectSlideData);
  const dispatch = useAppDispatch();
  const tg = window.Telegram.WebApp;

  if (slide) {
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
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full opacity-5"
              enterTo="translate-x-0 opacity-100"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-5"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen">
                <header className="absolute inset-x-0 top-0 z-50">
                  <nav
                    className="flex items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                  >
                    <div className="flex lg:flex-1">
                      <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="flex">
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </nav>
                </header>
                <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                  {slideData === "groups" && <GroupsList chat={chat} />}
                  {slideData === "questions" && <ErrorPage />}
                  {slideData === "answers" && <ErrorPage />}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
