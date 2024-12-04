import React from 'react'
import Link from 'next/link'
import { GrCart } from 'react-icons/gr'

const NavbarLinks = () => {
    return (
        <div className=''>
            <ul className='flex flex-col md:flex-row items-center gap-x-12 font-medium text-lg'>
                <li>
                    <Link href={"/category/men"}>Men</Link>
                </li>
                <li>
                    <Link href={"/category/women"}>Women</Link>
                </li>
                <li>
                    <Link href={"/product"}>All</Link>
                </li>
            </ul>            
        </div>
    )
}

export default NavbarLinks