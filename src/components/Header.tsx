
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Navbar from '@/components/NavbarLinks';
import { GrCart } from "react-icons/gr";
import NavbarLinks from '@/components/NavbarLinks';

const Header = () => {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer((prev) => !prev);
    };

    return (
        <header className="top-0 z-30 sticky bg-white opacity-90">
            <div className="flex justify-between items-center mx-10 z-50 md:py-2">
                {/* Logo */}
                <div className=''>
                    <Link href="/">
                        <div className='h-[20px] w-[120px] relative'>
                            <Image src='/threadley.png' alt='Dine Market' fill />
                        </div>
                    </Link>
                </div>

                {/* Button */}
                <div className="md:hidden pt-1">
                    <button
                        className=" text-gray-700"
                        onClick={toggleDrawer}
                    >
                        {drawer ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                    </button>
                </div>
                {drawer && (
                    <div className='md:hidden'>
                        <div className=" flex flex-col items-center justify-center absolute top-[40px] right-[40px] w-1/2 h-max opacity-90 bg-white z-50">
                            <NavbarLinks />
                            <div className='my-2 '>
                                <Link href={"/cart"}>
                                    <GrCart className='text-[20px]' />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

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
            </div>
        </header >
    );
};

export default Header;
