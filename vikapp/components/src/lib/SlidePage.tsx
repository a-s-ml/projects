import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface SlidePageProps {
  children: React.ReactNode;
  slide: boolean;
  close: () => void;
}

export default function SlidePage({ children, slide, close }: SlidePageProps) {
  return (
    <>
      <Transition.Root show={slide} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full opacity-5"
              enterTo="translate-x-0 opacity-100"
              leave="transform transition ease-in-out duration-100"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-5"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
