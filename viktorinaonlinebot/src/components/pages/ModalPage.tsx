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
import ExPage from "../Examp/ExPage";
import ExPage2 from "../Examp/ExPage2";
import ExPage3 from "../Examp/ExPage3";
import ExPage4 from "../Examp/ExPage4";
import ExPage5 from "../Examp/ExPage5";
import ExPage6 from "../Examp/ExPage6";
import ExPage7 from "../Examp/ExPage7";
import ExPage8 from "../Examp/ExPage8";
import ExPage9 from "../Examp/ExPage9";
import ExPage10 from "../Examp/ExPage10";
import ExPage11 from "../Examp/ExPage11";
import ExPage12 from "../Examp/ExPage12";

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
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
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
                    <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                      {/* <SettingsGroupForm group={modalData}/> */}
                      <ExPage4 />

                      <ExPage6 />
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
