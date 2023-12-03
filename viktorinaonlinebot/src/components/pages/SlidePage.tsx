import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useGetMenuQuery } from '../store/vik/vik.api'

interface SlideItemsProps {
    slideData: string
    toggleStateS: boolean
    toggleS(n: string): void
}

export default function Example({ toggleStateS, toggleS, slideData }: SlideItemsProps) {
    
    const { isLoading, isSuccess, isError, data } = useGetMenuQuery(slideData, {skip: !slideData})

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
                                        {isError && <b className="text-center text-[var(--tg-theme-destructive-text-color)]">Error</b>}
                                        {isLoading && <b className="text-center text-[var(--tg-theme-hint-color)]">Loading...</b>}
                                        {isSuccess && data?.map(item =>
                                            <p className="text-red-60" key={item.id} >{item.name}</p>
                                        )}
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
