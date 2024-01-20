import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Preloader from "../Preloader/Preloader";
import SwipeToDelete from "../hooks/SwipeToDelete";

interface SlideDownProps {
  slide: boolean;
}

export default function SlideDown({ slide }: SlideDownProps) {
  const tg = window.Telegram.WebApp;

  const [slideState, setSlide] = useState(slide);
  if (slide) {
    tg.HapticFeedback.notificationOccurred("success");
  }

  function handleDelete() {
    console.log("handleDelete");
  }

  return (
    <>
      <Transition.Root show={slideState} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setSlide(!slideState)}
        >
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-y-full opacity-5"
              enterTo="translate-y-0 opacity-100"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-full opacity-5"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen">
                <div className="h-full overflow-y-auto bg-[var(--tg-theme-bg-color)] p-8">
                  <Preloader />
                  <SwipeToDelete
                    onDelete={handleDelete} // required
                    // optional
                    height={150} // default
                    transitionDuration={250} // default
                    deleteWidth={75} // default
                    deleteThreshold={75} // default
                    showDeleteAction={true} //default
                    deleteColor="rgba(252, 58, 48, 1.00)" // default
                    deleteText="Delete" // default
                    disabled={false} // default
                    id="swiper-1" // not default
                    className="my-swiper" // not default
                    rtl={false} // default
                    onDeleteConfirm={(
                      onSuccess: () => void,
                      onCancel: () => void
                    ) => {
                      // not default - default is null
                      if (
                        window.confirm(
                          "Do you really want to delete this item ?"
                        )
                      ) {
                        onSuccess();
                      } else {
                        onCancel();
                      }
                    }}
                  >
                    <span>Item 3</span>
                  </SwipeToDelete>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
