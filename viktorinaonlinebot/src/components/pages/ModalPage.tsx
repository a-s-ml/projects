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
            enter="ease-out duration-800"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-800"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="relative inset-0 text-center transform container w-screen h-full p-6 bg-[var(--tg-theme-bg-color)] transition-all">
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
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
