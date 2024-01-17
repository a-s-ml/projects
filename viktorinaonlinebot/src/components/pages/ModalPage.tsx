import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useAppSelector, useAppDispatch } from "../store";
import {
  selectModal,
  selectModalData,
  showModal,
} from "../store/api/modal.slice";
import SettingsGroup from "./group/SettingsGroup";
import { showSlide } from "../store/api/slide.slice";
import { Header } from "./Header";
import { Footer } from "./Footer";
import DefaultSettingsGroup from "./group/sittingsGroup/DefaultSettingsGroup";
import NewQuesion from "./question/NewQuesion";
import TitleForm from "./question/newQuestion/TitleForm";

export default function ModalPage() {
  const modal = useAppSelector(selectModal);
  const modalData = useAppSelector(selectModalData);
  const dispatch = useAppDispatch();
  const tg = window.Telegram.WebApp;

  if (modal) {
    tg.onEvent("backButtonClicked", () => {
      dispatch(showModal(false));
      dispatch(showSlide(true));
    });
  }

  return (
    <>
      <Transition.Root show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20"
          onClose={() => dispatch(showModal(true))}
        >
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
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
                {modalData === 0n ? (
                  <>
                    <Header>
                      <TitleForm />
                    </Header>
                    <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                      <NewQuesion />
                    </div>
                  </>
                ) : (
                  <>
                    <Header>
                      <DefaultSettingsGroup />
                    </Header>
                    <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                      <SettingsGroup />
                    </div>
                  </>
                )}
                <Footer />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
