import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ErrorPage from "./ErrorPage";
import GroupsList from "./group/GroupsList";
import {
  selectSlide,
  selectSlideData,
  selectSlideGroup,
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
  const slideData = useAppSelector(selectSlideData);
  const slideGroup = useAppSelector(selectSlideGroup);
  const dispatch = useAppDispatch();
  const tg = window.Telegram.WebApp;

  if (slide) {
    tg.onEvent("backButtonClicked", () => dispatch(showSlide(false)));
    tg.MainButton.hide();
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
                {slideData.level === 1 ? (
                  <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                    {slideData.type === "groups" && (
                      <>
                        <Header>
                          <AddNewGroup />
                        </Header>
                        <GroupsList chat={chat} />
                        <Footer />
                      </>
                    )}
                    {slideData.type === "questions" && (
                      <>
                        <Header>
                          <AddNewQuestion />
                        </Header>
                        <QuestionList chat={chat} />
                        <Footer />
                      </>
                    )}
                    {slideData.type === "answers" && <ErrorPage />}
                  </div>
                ) : (
                  <>
                    {slideGroup === 0n ? (
                      <NewQuesion />
                    ) : (
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
