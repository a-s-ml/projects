import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useAppSelector, useAppDispatch } from "../store";
import {
  selectModal,
  selectModalData,
  showModal,
} from "../store/api/modal.slice";
import SettingsGroupForm from "../SettingsGroupForm";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface ModalProps {}

export default function ModalPage({}: ModalProps) {
  const modal = useAppSelector(selectModal);
  const modalData = useAppSelector(selectModalData);
  const dispatch = useAppDispatch();

  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => dispatch(showModal(true))}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10">
            <div className="flex items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
              >
                <Dialog.Panel className="relative transform container w-screen h-full p-6 bg-[var(--tg-theme-bg-color)] transition-all">
                    <div className="mt-3 text-center"> 
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold text-[var(--tg-theme-accent-text-color)]"
                      >
                        {modalData}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-[var(--tg-theme-accent-text-color)]">
                          <SettingsGroupForm />
                        </p>
                      </div>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
