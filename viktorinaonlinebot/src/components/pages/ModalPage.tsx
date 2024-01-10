import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useAppSelector, useAppDispatch } from "../store";
import {
  selectModal,
  selectModalData,
  showModal,
} from "../store/api/modal.slice";
import SettingsGroupForm from "../SettingsGroupForm";

export default function ModalPage() {
  const modal = useAppSelector(selectModal);
  const modalData = useAppSelector(selectModalData);
  const dispatch = useAppDispatch();

  return (
    <>
      <Transition.Root show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity h-full w-screen" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 overflow-y-auto ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all">
                <div className="ml-4 mt-0 text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    {modalData}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <SettingsGroupForm />
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
