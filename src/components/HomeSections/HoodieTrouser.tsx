import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const HoodieTrouser = () => {
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
                <div className='h-[400px] md:w-1/2 overflow-hidden group relative'>
                    <Link href="/product/1003">
                        <Image src="https://res.cloudinary.com/dkd9ojziw/image/upload/v1734460853/h7_gu9dls.webp" alt="hoodie" fill objectFit='cover' style={{ objectPosition: 'center', transition: 'transform 0.3s ease' }} className="group-hover:scale-105" />
                    </Link>
                </div>
            </div>
            <div className='flex md:flex-row flex-col gap-y-3 gap-x-3 mt-3 mx-3'>
                <div className='h-[400px] md:w-1/2 overflow-hidden group relative'>
                    <Link href={"/product/1010"}>
                        <Image
                            src="https://res.cloudinary.com/dkd9ojziw/image/upload/v1734460393/t2_mtqezl.webp"
                            alt="hoodie"
                            fill
                            objectFit='cover'
                            style={{ objectPosition: 'top', transition: 'transform 0.3s ease' }}
                            className="group-hover:scale-105"
                        />
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-2 text-center bg-[#F6F6F6] h-[400px] md:w-1/2'>
                    <div>
                        <h4 className="font-bold tracking-wide text-30 ">
                            Style and comfort with our premium trousers
                        </h4>
                        <p className="mt-1 text-slate-600 tracking-wider italic">
                            Lorem sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold tracking-wide text-30 ">
                            Designed for every occasion
                        </h4>
                        <p className="mt-1 text-slate-600 tracking-wider italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus quo natus
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoodieTrouser