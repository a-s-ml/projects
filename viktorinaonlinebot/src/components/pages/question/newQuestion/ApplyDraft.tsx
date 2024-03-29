import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface ApplyDraftProps {
  showNotification: boolean;
  setShowNotification: Dispatch<SetStateAction<boolean>>;
  applyDraft: () => void;
}

export default function ApplyDraft({showNotification, setShowNotification, applyDraft}: ApplyDraftProps) {

  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-12"
      >
        <div className="flex w-full flex-col items-center space-y-4">
          <Transition
            show={showNotification}
            as={Fragment}
            enter="transform ease-out duration-300 transition delay-1000 "
            enterFrom="translate-y-2 opacity-0 delay-1000 "
            enterTo="translate-y-0 opacity-100 delay-1000 "
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 delay-1000 "
            leaveTo="opacity-0 delay-1000 "
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex w-0 flex-1 justify-between">
                    <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                      Применить несохранённый черновик
                    </p>
                    <button
                      type="button"
                      className="ml-3 flex-shrink-0 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Ок
                    </button>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={applyDraft}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                        onClick={() => setShowNotification(!showNotification)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
