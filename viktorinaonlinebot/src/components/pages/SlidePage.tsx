import { Fragment, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ErrorPage from '../ErrorPage';
import GroupsList from '../GroupsList';
import QuestionsList from '../QuestionsList';
import ModalPage from './ModalPage';
import store, { useModalDispatch, useModalSelector } from '../store';
import { closeModal } from '../store/modal.slice';

interface SlideItemsProps {
    slideData: string
    toggleStateS: boolean
    toggleS(n: string): void
    chat: number
}

export default function SlidePage({ toggleStateS, toggleS, slideData, chat }: SlideItemsProps) {

    const tg = window.Telegram.WebApp;
    tg.onEvent('backButtonClicked', () => toggleS(''))

    // const [modalData, setModalData] = useState(0);
    // const [modalState, setModalState] = useState(false);
  
    // function openModal(s: SetStateAction<number>) {
    //   setModalState(!modalState);
    //   if (!modalState) {
    //     tg.BackButton.show();
    //     setModalData(s);
    //   }
    //   if (modalState) {
    //     tg.BackButton.hide();
    //   }
    // }

    return (
        <>
        <Transition.Root show={toggleStateS} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => toggleS('')}>
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
                                        {slideData === "groups" && <GroupsList chat={chat}/>}
                                        {slideData === "questions" && <QuestionsList chat={chat}/>}
                                        {slideData === "answers" && <ErrorPage/>}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
        <ModalPage />
        </>
    )
}
