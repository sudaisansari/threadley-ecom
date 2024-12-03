import Link from 'next/link'
import React from 'react'

interface Props {
    name: string;
    link: string
}

const Button: React.FC<Props> = ({ name, link }) => {
    return (
        <Link href={link}>
            <button className='bg-white opacity-80 text-black px-4 py-2 mt-4 rounded-md'>
                <span className='text-20 font-bold text-black opacity-90 tracking-wide'>{name}</span>
            </button>
        </Link>
    )
}

export default Button