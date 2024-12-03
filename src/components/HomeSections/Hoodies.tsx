import Image from 'next/image'
import React from 'react'



const Hoodies = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row gap-y-3 gap-x-3 my-3 mx-3'>
                <div className='flex flex-col items-center justify-center gap-y-2 text-center bg-[#F6F6F6] h-[400px] md:w-1/2'>
                    <div>
                        <h4 className="font-bold tracking-wide text-30 ">
                            Premium Hoodies You Never Left
                        </h4>
                        <p className="mt-1 text-slate-600 tracking-wider italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold tracking-wide text-30 ">
                            Using Good Quality Materials
                        </h4>
                        <p className="mt-1 text-slate-600 tracking-wider italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quo natus
                        </p>
                    </div>
                </div>
                <div className='h-[400px] md:w-1/2 relative'>
                    <Image src="/hoodies/h5.webp" alt="hoodie" fill objectFit='cover' style={{ objectPosition: 'top' }} />
                </div>
            </div>
            <div className='flex md:flex-row flex-col gap-y-3 gap-x-3 mt-3 mx-3'>
                <div className='h-[400px] md:w-1/2 relative'>
                    <Image src="/hoodies/h6.webp" alt="hoodie" fill objectFit='cover' style={{ objectPosition: 'top' }} />
                </div>
                <div className='h-[400px] md:w-1/2 relative'>
                    <Image src="/hoodies/h8.webp" alt="hoodie" fill objectFit='cover' style={{ objectPosition: 'top' }} />
                </div>
            </div>
        </div>
    )
}

export default Hoodies