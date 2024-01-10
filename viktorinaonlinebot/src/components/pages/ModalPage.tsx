import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useAppSelector, useAppDispatch } from "../store";
import {
  selectModal,
  selectModalData,
  showModal,
} from "../store/api/modal.slice";
import SettingsGroupForm from "../SettingsGroupForm";
import { showSlide } from "../store/api/slide.slice";

export default function ModalPage() {
  const modal = useAppSelector(selectModal);
  const modalData = useAppSelector(selectModalData);
  const dispatch = useAppDispatch();
  const tg = window.Telegram.WebApp;

  if (modal) {
    tg.BackButton.show();
    tg.onEvent("backButtonClicked", () => {
      dispatch(showModal(false));
      dispatch(showSlide(true));
    });
  }
  if (!modal) {
    tg.BackButton.hide();
    tg.offEvent("backButtonClicked", () => {
      dispatch(showModal(false));
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
                      <SettingsGroupForm />
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
