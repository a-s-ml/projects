import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ErrorPage from '../ErrorPage';
import GroipsListItem from '../GroupsListItem';
import QuestionsListItem from '../QuestionsListItem';

interface SlideItemsProps {
    slideData: string
    toggleStateS: boolean
    toggleS(n: string): void
    chat: number
}

export default function SlidePage({ toggleStateS, toggleS, slideData, chat }: SlideItemsProps) {
    
    return (
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
                                        {slideData === "groups" && <GroipsListItem chat={chat}/>}
                                        {slideData === "questions" && <QuestionsListItem chat={chat}/>}
                                        {slideData === "answers" && <ErrorPage/>}
  
                                        <div className="space-y-6 pb-16">
                                            <div className="flex">
                                                <button type="button" className="flex-1 rounded-md bg-[var(--tg-theme-button-color)] px-3 py-2 text-sm font-semibold text-[var(--tg-theme-button-text-color)] shadow-sm hover:bg-[var(--tg-theme-secondary-bg-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                                    onClick={() => toggleS('')}
                                                >Download
                                                </button>
                                                <button type="button" className="ml-3 flex-1 rounded-md bg-[var(--tg-theme-button-color)] px-3 py-2 text-sm font-semibold text-[var(--tg-theme-button-text-color)] shadow-sm ring-1 ring-inset hover:bg-[var(--tg-theme-secondary-bg-color)]"
                                                    onClick={() => toggleS('')}
                                                >Back
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
