import React from 'react'
import Link from 'next/link'

const NavbarLinks = () => {
    return (
        <div className=''>
            <ul className='flex flex-col md:flex-row items-center gap-x-12 font-medium text-lg'>
                <li>
                    <Link href={"/category/women"}>Women</Link>
                </li>
                <li>
                    <Link href={"/category/men"}>Men</Link>
                </li>               
                <li>
                    <Link href={"/product"}>All</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarLinks