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
      <Transition.Root
        show={modal}
        as={Fragment}
        enter="ease-out duration-800"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-800"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={() => dispatch(showModal(true))}
        >
          <Dialog.Panel className="relative text-center opacity-100 container w-screen h-full p-6 bg-[var(--tg-theme-bg-color)] transition-all">
            <Dialog.Title 
              as="h3"
              className="text-[var(--tg-theme-accent-text-color)]"
            >
              {modalData}
            </Dialog.Title>
            <p className="text-sm text-[var(--tg-theme-accent-text-color)]">
              <SettingsGroupForm />
            </p>
          </Dialog.Panel>
        </Dialog>
      </Transition.Root>
    </>
  );
}
