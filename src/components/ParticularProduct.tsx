"use client"
import { ParticularProducts } from '@/types/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { GrCart } from 'react-icons/gr';
import CartCheckoutButton from './CartCheckoutButton';
import { RxCross2 } from 'react-icons/rx';
import { addToDataCart } from '@/store/slice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProducts, updateProductQuantity, } from '@/config/firebase';

const sizes = ["sm", "md", "lg", "xl"];

fetchProducts()

const ParticularProduct: React.FC<ParticularProducts> = ({ id, image, title, price, description, quantity }) => {
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [size, SetSize] = useState(false)
    const dispatch = useDispatch()

    const addToCart = () => {
        console.log("Added to cart");
        // console.log("Size : ", selectedSize, " id", id)
        updateProductQuantity(id, -1);
        const priceU = parseInt(price.replace(/,/g, ''))
        dispatch(addToDataCart({ id, title, price: priceU, image, size: selectedSize }))
        toast.success("Item Added to Cart", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    };

    return (
        <div>
            <ToastContainer />
            <div className="flex md:flex-row flex-col justify-center gap-x-4 ">
                {/* Left Image */}
                <div className='transform hovecale-105 transition-transform lg:h-[600px] lg:w-[450px] md:h-[550px] md:w-[350px] h-[400px] w-full relative'>
                    <Image
                        fill
                        src={image}
                        alt='Product Image'
                        objectFit="cover"
                        style={{ objectPosition: 'top', transition: 'transform 0.3s ease' }}
                    />
                </div>
                {/* Right Content */}
                <div className='lg:h-[600px] lg:w-[450px] md:h-[550px] md:w-1/2 w-full px-2 mt-5 flex flex-col  justify-center'>
                    {/* price */}
                    <div>
                        <h1 className="text-30 tracking-wide italic font-bold">{title}</h1>
                        <p className='mt-5'>
                            Rs<span className='text-2xl mx-1 font-semibold'>{price}</span>
                        </p>
                    </div>
                    {/* Size chart */}
                    <button
                        onClick={() => SetSize(true)}
                        className='flex gap-x-3 items-center justify-center w-max bg-[#14253D] opacity-80 text-white px-4 py-2 mt-5 rounded-md'>
                        <span className='md:text-[18px] font-semibold opacity-90 tracking-wide'>Size Guide</span>
                    </button>
                    {quantity === 0 ?
                        <div>
                            <p className='mt-5 text-red-500 text-xl font-semibold tracking-wide'>
                                Out of Stock
                            </p>
                        </div>
                        :
                        <div>
                            <p className='mt-5 text-xl font-semibold tracking-wide'>
                                Stock:<span className='text-2xl mx-1'>{quantity}</span>left
                            </p>
                        </div>
                    }
                    {size &&
                        <div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-4 rounded-md z-50  md:w-max">
                                <div className='flex justify-between items-start'>
                                    <h2 className="text-2xl font-bold mb-4">Size Guide</h2>
                                    <button
                                        onClick={() => SetSize(false)}
                                    >
                                        <RxCross2 size={30} />
                                    </button>
                                </div>
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="text-left border border-gray-300 p-2 bg-gray-100">SIZE</th>
                                            <th className="text-left border border-gray-300 p-2 bg-gray-100">CHEST</th>
                                            <th className="text-left border border-gray-300 p-2 bg-gray-100">SHOULDER</th>
                                            <th className="text-left border border-gray-300 p-2 bg-gray-100">LENGTH</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { size: 'S', chest: 20, shoulder: 17.5, length: 28 },
                                            { size: 'M', chest: 21, shoulder: 18.5, length: 29 },
                                            { size: 'L', chest: 22, shoulder: 19.5, length: 30 },
                                            { size: 'XL', chest: 23, shoulder: 20.5, length: 31 },
                                        ].map((row) => (
                                            <tr key={row.size}>
                                                <td className="border border-gray-300 p-2">
                                                    <div className="border rounded-md bg-gray-50 text-center py-1">{row.size}</div>
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    <div className="border rounded-md bg-gray-50 text-center py-1">{row.chest}</div>
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    <div className="border rounded-md bg-gray-50 text-center py-1">{row.shoulder}</div>
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    <div className="border rounded-md bg-gray-50 text-center py-1">{row.length}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    {/* Sizes */}
                    <div className='mt-5'>
                        <h3 className="text-xl font-semibold">Size</h3>                      
                        <div className="flex gap-x-4 mt-3">
                            {sizes.map((item, i) => {
                                return (
                                    <button
                                        onClick={() => setSelectedSize(item)} 
                                        key={i}
                                        className={`ring-2 ring-black px-3 py-2 font-bold rounded-full _center hover:shadow-xl ${selectedSize === item ? "bg-[#14253D] text-white" : "hover:bg-[#14253D] hover:text-white"}`}
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
                    <CartCheckoutButton name='Add to Cart' action={addToCart} icon={<GrCart />} quantity={quantity} />
                </div>
            </div>

        </div >
    )
}

export default ParticularProduct