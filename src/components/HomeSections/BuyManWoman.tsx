import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const BuyManWoman = () => {
    return (
        <div className='flex md:flex-row flex-col items-center justify-center gap-y-3 gap-x-3 mt-3 mx-3'>
            <div className='h-[600px] md:w-2/5 w-full relative overflow-hidden group'>
                <Image
                    src="/dmen.webp"
                    alt="hoodie"
                    fill
                    objectFit="cover"
                    style={{ objectPosition: 'top', transition: 'transform 0.3s ease' }}
                    className="group-hover:scale-110"
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <Button name='Shop Men' link='/men' />
                </div>
            </div>
            <div className='h-[600px] md:w-2/5 w-full relative overflow-hidden group'>
                <Image
                    src="/dwomen.webp"
                    alt="hoodie"
                    fill
                    objectFit="cover"
                    style={{ objectPosition: 'top', transition: 'transform 0.3s ease' }}
                    className="group-hover:scale-110"
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <Button name='Shop Women' link='/women' />
                </div>
            </div>
        </div>
    )
}

export default BuyManWoman