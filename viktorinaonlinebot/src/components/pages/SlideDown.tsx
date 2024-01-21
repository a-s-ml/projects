import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Preloader from "../Preloader/Preloader";
import SwipeToDelete from "../hooks/SwipeToDelete";
import { useAppSelector } from "../store";
import { selectSlideUser } from "../store/api/slide.slice";
import { useGetGroupsQuery } from "../store/api/group.api";
import GroupsListItem from "./group/GroupsListItem";

interface SlideDownProps {
  slide: boolean;
}

export default function SlideDown({ slide }: SlideDownProps) {
  const tg = window.Telegram.WebApp;

  const [slideState, setSlide] = useState(slide);
  if (slide) {
    tg.HapticFeedback.notificationOccurred("success");
  }

  const chat = useAppSelector(selectSlideUser);

  const {
    isLoading: loadGroups,
    isError: errorGroups,
    data: dataGroups,
    isSuccess: successGroup,
  } = useGetGroupsQuery(chat);
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
                  <ul
                    role="list"
                    className="mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9"
                  >
                    {successGroup &&
                      dataGroups.map((group) => (
                        <SwipeToDelete
                          key={group.id}
                          onDelete={() => console.log("sdfsdf")}
                        >
                          <span key={group.id}>dsgsdf {String(group.chat)}</span>
                        </SwipeToDelete>
                      ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
