"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Navbar from '@/components/NavbarLinks';
import { GrCart } from "react-icons/gr";
import NavbarLinks from '@/components/NavbarLinks';
import { useSelector } from 'react-redux';
import { RootStat } from '@/types/types';

const Header = () => {
    const [drawer, setDrawer] = useState(false);
    const data = useSelector((state: RootStat) => state.CartData)

    const toggleDrawer = () => {
        setDrawer((prev) => !prev);
    };

    const action = () => {
        setDrawer(false)
    }

    return (
        <header className="top-0 z-30 sticky bg-white opacity-90">
            <div className="flex justify-between items-center mx-10 z-50 md:py-2">
                {/* Logo */}
                <div className='md:block hidden'>
                    <Link href="/">
                        <div className='h-[20px] w-[120px] relative'>
                            <Image src='/threadley.png' alt='Dine Market' fill />
                        </div>
                    </Link>
                </div>

                {/* Cart Mobile */}
                <div className='md:hidden relative'>
                    <Link href={"/cart"}>
                        <span className='bg-red-700 rounded-full px-[5px] absolute text-white text-[12px] -right-[6px] -top-[8px]'>{data.length}</span>
                        <GrCart className='text-[20px]' />
                    </Link>
                </div>

                <div className='md:hidden block'>
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
                        {drawer ? <IoMdClose className='text-[30px]' /> : <IoMdMenu className='text-[30px]' />}
                    </button>
                </div>

                {/* Navigation bar */}
                <div className="hidden md:block">
                    <Navbar />
                </div>

                {/* Cart */}
                <div className='md:block hidden relative'>
                    <Link href={"/cart"}>
                        <span className='bg-red-700 rounded-full px-[5px] absolute text-white text-[12px] -right-[6px] -top-[8px]'>{data.length}</span>
                        <GrCart className='text-[20px]' />
                    </Link>
                </div>
            </div>
            {drawer && (
                <div className='md:hidden transition ease-in-out 0.3s'>
                    <div
                        className="flex flex-col items-center justify-center absolute top-[40px] w-full h-max opacity-90 bg-white z-50">
                        <NavbarLinks action={action} />
                        {/* <div
                            onClick={() => setDrawer(false)}
                            className='my-2 '>
                            <Link href={"/cart"}>
                                <GrCart className='text-[20px]' />
                            </Link>
                        </div> */}
                    </div>
                </div>
            )}
        </header >
    );
};

export default Header;
