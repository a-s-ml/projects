import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ErrorPage from "./ErrorPage";
import GroupsList from "./group/GroupsList";
import {
  selectSlide,
  selectSlideData,
  selectSlidePage,
  showSlide,
} from "../store/api/slide.slice";
import { useAppDispatch, useAppSelector } from "../store";
import { Header } from "./Header";
import { Footer } from "./Footer";
import AddNewGroup from "./group/AddNewGroup";
import QuestionList from "./question/QuestionList";
import AddNewQuestion from "./question/AddNewQuestion";
import DefaultSettingsGroup from "./group/sittingsGroup/DefaultSettingsGroup";
import SettingsGroup from "./group/SettingsGroup";
import NewQuesion from "./question/NewQuesion";

interface SlideItemsProps {
  chat: number;
}

export default function SlidePage({ chat }: SlideItemsProps) {
  const slide = useAppSelector(selectSlide);
  const page = useAppSelector(selectSlidePage);
  const dispatch = useAppDispatch();

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
                {page === "groups" && (
                  <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                    <Header>
                      <AddNewGroup />
                    </Header>
                    <GroupsList chat={chat} />
                    <Footer />
                  </div>
                )}
                {page === "questions" && (
                  <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                    <Header>
                      <AddNewQuestion />
                    </Header>
                    <QuestionList chat={chat} />
                    <Footer />
                  </div>
                )}
                {page === "answers" && <ErrorPage />}
                {page === "addQuestion" && <NewQuesion />}
                {page === "group" && (
                  <>
                    <Header>
                      <DefaultSettingsGroup />
                    </Header>
                    <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                      <SettingsGroup />
                    </div>
                    <Footer />
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
