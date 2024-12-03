import { Dispatch, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Navbar from './NavbarLinks';
import Shoppingcart from './Shoppingcart';
import { UserButton } from '@clerk/nextjs';
import Link from "next/link" 

export default function CartDrawer({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}) {

    return (
        // <Transition.Root show={open} as={Fragment}>
        //     <Dialog as="div" className="relative z-10" onClose={setOpen}>
        //         <Transition.Child
        //             as={Fragment}
        //             enter="ease-in-out duration-500"
        //             enterFrom="opacity-0"
        //             enterTo="opacity-100"
        //             leave="ease-in-out duration-500"
        //             leaveFrom="opacity-100"
        //             leaveTo="opacity-0">
        //             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        //         </Transition.Child>

        //         <div className="fixed inset-0 overflow-hidden">
        //             <div className="absolute inset-0 overflow-hidden">
        //                 <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        //                     <Transition.Child
        //                         as={Fragment}
        //                         enter="transform transition ease-in-out duration-500 sm:duration-700"
        //                         enterFrom="translate-x-full"
        //                         enterTo="translate-x-0"
        //                         leave="transform transition ease-in-out duration-500 sm:duration-700"
        //                         leaveFrom="translate-x-0"
        //                         leaveTo="translate-x-full">
        //                         <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
        //                             <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
        //                                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        //                                     <div className="flex items-start justify-between">
        //                                         <Dialog.Title className="text-lg font-medium text-gray-900">
        //                                             <div>
        //                                                 <UserButton afterSignOutUrl='/' />
        //                                             </div>
        //                                         </Dialog.Title>
        //                                         <div className="ml-3 flex h-7 items-center">
        //                                             <button
        //                                                 type="button"
        //                                                 className="-m-2 p-2 text-gray-400 hover:text-gray-500"
        //                                                 onClick={() => setOpen(false)}>
        //                                                 <span className="sr-only">Close panel</span>
        //                                                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        //                                             </button>
        //                                         </div>
        //                                     </div>
        //                                     <div>
        //                                         {/* Navbar Links */}
        //                                         <div onClick={() => setOpen(false)} className='items-center mt-8 gap-y-28'>
        //                                             <Navbar />
        //                                         </div>
        //                                         {/* Shopping Cart */}
        //                                         <div onClick={() => setOpen(false)} className='mt-4'>
        //                                             <Link href={"/cart"}>
        //                                                 <Shoppingcart />
        //                                             </Link>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </Dialog.Panel>
        //                     </Transition.Child>
        //                 </div>
        //             </div>
        //         </div>
        //     </Dialog>
        // </Transition.Root>
        <div></div>
    );
}