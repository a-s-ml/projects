import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useAppSelector, useAppDispatch } from "../store";
import {
  selectModal,
  selectModalData,
  showModal,
} from "../store/api/modal.slice";
import SettingsGroupForm from "../SettingsGroupForm";

interface ModalProps {}

export default function ModalPage({}: ModalProps) {
  const modal = useAppSelector(selectModal);
  const modalData = useAppSelector(selectModalData);
  const dispatch = useAppDispatch();

  const cancelButtonRef = useRef(null) 
  return (
    <>
      <Transition.Root show={modal} as={Fragment}>
        <Dialog
          as="div"
          initialFocus={cancelButtonRef}
          className="relative z-10"
          onClose={() => dispatch(showModal(false))}
        >
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="w-full h-full z-50 overflow-y-auto p-4 text-center sm:items-center sm:p-0">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[var(--tg-theme-bg-color)] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {modalData}
                      </Dialog.Title>
                      <SettingsGroupForm />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => dispatch(showModal(false))}
                      ref={cancelButtonRef}
                    >
                      Go back to dashboard
                    </button>
                  </div>
                </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
