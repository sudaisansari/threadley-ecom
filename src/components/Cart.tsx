import React from 'react'
import { productsData } from './products'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'
import CartCheckoutButton from './CartCheckoutButton'


const Cart = () => {
    const product = productsData[0]
    // console.log(product)
    return (
        <div className='md:mx-10 my-5'>
            <div className='mb-3 ml-1 md:block hidden'>
                <h1 className='text-30'>Shopping Cart</h1>
            </div>
            <div className='flex md:flex-row flex-col gap-x-2'>
                {/* Products */}
                <div className='md:w-2/3'>
                    <div className='md:block hidden'>
                        <div className='bg-gray-300 flex justify-between p-2 font-semibold rounded-md'>
                            <p>ITEM</p>
                            <div className='flex justify-between gap-x-10'>
                                <p>QUANTITY</p>
                                <p>SUBTOTAL</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 mx-2 flex md:flex-row flex-col justify-between '>
                        <div className='flex gap-x-3'>
                            <div className='md:w-[50px] md:h-[75px] h-[150px] w-[100px] relative'>
                                <Image src={product.image} alt={product.title} fill />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <p className='font-semibold text-[16px]'>{product.title}</p>
                                <p className='font-semibold text-[16px]'>Rs {product.price}</p>
                                {/* <p className='font-semibold text-[16px] ring-1 ring-black w-max px-[2px]'>S</p> */}
                            </div>
                        </div>
                        <div className='flex justify-between my-4 md:my-0 gap-x-10'>
                            <div>
                                <RiDeleteBin6Line size={25} />
                            </div>
                            <div className="flex items-start gap-x-3 font-semibold text-[20px]">
                                <div
                                    className="font-bold text-[20px] ring-1 ring-black w-max px-2"
                                >
                                    -
                                </div>
                                1
                                <div
                                    className="font-bold text-[20px] ring-1 ring-black w-max px-2"
                                >
                                    +
                                </div>
                            </div>
                            <div>
                                <p>Rs <span className='font-semibold inline-block text-[20px]'>{product.price}</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Summary */}
                <div className='bg-gray-300 w-full md:w-1/3 py-2 rounded-md'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-30'>
                            Order Summary
                        </h3>
                        {/* line */}
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <div className='my-3 ml-3'>
                            <div className='flex items-center  mb-2 font-semibold text-[20px] gap-x-2'>
                                <p>Quantity: </p>
                                <p>1</p>
                            </div>
                            <div className='flex items-center  gap-x-2 '>
                                <p className='font-semibold text-[20px]'>Order Total: </p>
                                <p>Rs <span className='font-semibold text-[20px]'>{product.price}</span></p>
                            </div>
                            <div className='flex mt-3 gap-x-2'>
                                <p className='font-semibold text-[20px]'>Note: </p>
                                <p>Taxes and shipping calculated at checkout.</p>
                            </div>
                        </div>
                        {/* line */}
                        <div className='w-[80%] h-[1px] bg-black'></div>
                        <CartCheckoutButton name='Checkout' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart