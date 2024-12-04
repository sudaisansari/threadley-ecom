"use client"
import { ParticularProducts } from '@/types/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { GrCart } from 'react-icons/gr';
import CartCheckoutButton from './CartCheckoutButton';

const sizes = ["sm", "md", "lg", "xl"];

const ParticularProduct: React.FC<ParticularProducts> = ({ id, image, title, price, description }) => {
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    console.log("asd", id, title)
    const addToCart = () => {
        console.log("Added to cart");
        console.log("Size : ", selectedSize, " id", id)
    };

    return (
        <div>
            <div className="flex md:flex-row flex-col justify-evenly ">
                {/* Left Image */}
                <div className='transform hover:scale-105 transition-transform lg:h-[600px] lg:w-[450px] md:h-[550px] md:w-[350px] h-[400px] w-full relative'>
                    <Image
                        fill
                        src={image}
                        alt='Product Image'
                        objectFit="cover"
                        style={{ objectPosition: 'top', transition: 'transform 0.3s ease' }}
                    />
                </div>
                {/* Right Content */}
                <div className='md:w-1/2 px-2 mt-5 flex flex-col  justify-center'>
                    {/* price */}
                    <div>
                        <h1 className="text-30 tracking-wide italic font-bold">{title}</h1>
                        <p className='mt-5'>
                            Rs<span className='text-2xl mx-1 font-semibold'>{price}</span>
                        </p>
                    </div>
                    {/* Size chart */}
                    <button className='flex gap-x-3 items-center justify-center w-max bg-[#14253D] opacity-80 text-white px-4 py-2 mt-5 rounded-md'>
                        <span className='md:text-[18px] opacity-90 tracking-wide'>Size Guide</span>
                    </button>
                    {/* Sizes */}
                    <div className='mt-5'>
                        <h3 className="text-xl font-semibold">Size</h3>
                        <div className="flex gap-x-4 mt-3">
                            {sizes.map((item, i) => {
                                return (
                                    <button
                                        onClick={() => setSelectedSize(item)}
                                        key={i}
                                        className="ring-2 hover:bg-[#14253D] hover:text-white ring-black px-3 py-2 font-bold rounded-full _center hover:shadow-xl"
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* desc */}
                    <div className='mt-5 w-full md:w-2/3'>
                        <p className="text-sm">{description}</p>
                    </div>
                    {/* Add to Cart */}
                    {/* <button
                        onClick={addToCart}
                        className='flex gap-x-3 items-center justify-center w-full md:w-1/2 transform hover:scale-105 transition-transform bg-[#14253D] opacity-80 text-white px-4 py-2 mt-5 rounded-md'>
                        <span><GrCart className='text-[20px]' /></span>
                        <span className='md:text-[18px] font-bold opacity-90 tracking-wide'>Add to Cart</span>
                    </button> */}
                    <CartCheckoutButton name='Add to Cart' action={addToCart} icon={<GrCart />} />
                </div>
            </div>

        </div>
    )
}

export default ParticularProduct