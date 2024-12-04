import { Products } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard: React.FC<Products> = ({
    price,
    image,
    title,
    id
}
) => {
    return (
        <div id={id} className=' mb-2 w-auto max-w-64 h-auto items-center text-center rounded-xl overflow-hidden'>
            <Link href={`/product/${id}`}>
                <div className='mx-auto transform hover:scale-105 transition-transform'>
                    <Image
                        width={250}
                        height={300}
                        src={image}
                        alt='Product Card'
                        objectFit="cover"
                        style={{ objectPosition: 'top', transition: 'transform 0.3s ease' }}
                    />
                </div>
            </Link>

            <div className='mb-1 mt-1 mx-[1px]'>
                <p className='font-bold text-xl italic'>{title}</p>
            </div>

            <div className='w-24 mx-auto rounded-t-md animate-slide-up'>
                <p>
                    Rs<span className='text-2xl mx-1 font-semibold'>{price}</span>
                </p>
            </div>
        </div>

    )
}

export default ProductCard