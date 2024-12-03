
"use client"
import React from 'react';
// import Wrapper from '@/components/shared/Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Drawer from '@/components/Drawer';
import Navbar from '@/components/NavbarLinks';
import { GrCart } from "react-icons/gr";

const Header = () => {
    const navbar = false;
    const [drawer, setDrawer] = useState(false);

    return (
        <header className="top-0 z-30 sticky bg-white opacity-90">
            <div className="flex justify-between items-center mx-10 z-50 py-2">
                {/* <Drawer open={drawer} setOpen={setDrawer} /> */}
                {/* <div className='flex items-center justify-center'> */}
                {/* Logo */}
                <div className=''>
                    <Link href="/">
                        <div className='h-[20px] w-[120px] relative'>
                            <Image src='/threadley.png' alt='Dine Market' fill />
                        </div>  
                    </Link>
                </div>

                {/* </div> */}

                {/* Button */}
                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setDrawer(true)}
                    >
                        {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                    </button>
                </div>


                {/* Navigation bar */}
                <div className="hidden md:block">
                    <Navbar />
                </div>

                {/* Cart */}
                <div className='hidden md:block'>
                    <Link href={"/cart"}>
                        <GrCart className='text-[20px]' />
                    </Link>
                </div>
                {/* <div className='hidden md:block'>
                        <UserButton afterSignOutUrl='/' />
                    </div> */}
            </div>
        </header >
    );
};

export default Header;
