"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'
import CartCheckoutButton from './CartCheckoutButton'
import { useDispatch, useSelector } from 'react-redux'
import { Products, RootStat } from '@/types/types'
import { deleteCartItem, qtyAndSbTtlUpdate, setProductsData } from '@/store/slice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProductsRealTime, updateProductQuantity } from '@/config/firebase'

const Cart = () => {
    const cartData = useSelector((state: RootStat) => state.CartData);
    const dispatch = useDispatch()
    const [products, setProducts] = useState<Products[]>([]);
    useEffect(() => {
        const unsubscribe = fetchProductsRealTime((fetchedProducts) => {
            console.log("Fetched products Db in Cart: ", fetchedProducts);
            setProducts(fetchedProducts); 
            dispatch(setProductsData(fetchedProducts)); 
        });
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [dispatch]);

    const deleteItemFromCart = (id: string) => {
        console.log("Delete Item", id)
        const itemInCart = cartData.find((item) => item.id === id);
        const cartQty = itemInCart?.Quantity
        const baseID = id.split("-")[0]

        if (cartQty === undefined) {
            console.log("Product not found or quantity is invalid.");
            return;
        }
        else {
            updateProductQuantity(baseID, cartQty)
        }

        dispatch(deleteCartItem(id))
        toast.error("Item Deleted from Cart", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    const handleQuantityChange = (id: string, change: number) => {
        const baseId = id.split("-")[0]
        const itemInDb = products.find((item) => item.id === baseId);
        const item = cartData.find((item) => item.id === id);

        if (itemInDb && typeof itemInDb.quantity === "number" && item?.Quantity) {
            const qty = item.Quantity;
            const newQty = qty + change;

            if (newQty > 0 && itemInDb.quantity > 0) {
                dispatch(qtyAndSbTtlUpdate({ id, qty: newQty }));

                if (change === -1) {
                    updateProductQuantity(baseId, 1);
                } else if (change === 1) {
                    updateProductQuantity(baseId, -1);
                }
            } else if (itemInDb.quantity === 0 && change === -1) {
                updateProductQuantity(baseId, 1);
                dispatch(qtyAndSbTtlUpdate({ id, qty: newQty }));
            }
        } else {
            console.log("Product not found or quantity is invalid.");
        }
    };


    let orderTotal = 0;
    cartData.forEach(item => {
        orderTotal += item.SubTotal;
    });
    console.log("CartData : ",cartData)
    console.log("Order Total: ", orderTotal);

    return (
        <div className='md:mx-10 my-5'>
            <ToastContainer />
            <div className='mb-3 ml-16 lg:text-start text-center md:block hidden'>
                <h1 className='text-30'>Shopping Cart</h1>
            </div>
            <div className='flex lg:flex-row flex-col lg:items-start justify-center items-center gap-x-2'>
                {/* Products */}
                <div className='lg:w-2/3'>
                    <div className='md:block hidden'>
                        <div className='bg-gray-300 flex justify-between p-2 font-semibold rounded-md'>
                            <p>ITEM</p>
                            <div className='flex justify-between gap-x-10'>
                                <p>QUANTITY</p>
                                <p>SUBTOTAL</p>
                            </div>
                        </div>
                    </div>
                    {/* Prod */}
                    {cartData.map((item) => (
                        <div
                            key={`${item.id}-${item.size}`} 
                            className='mt-3 mx-2 flex md:flex-row flex-col justify-between '>
                            <div className='flex gap-x-3'>
                                <div className='md:w-[50px] md:h-[75px] h-[150px] w-[100px] rounded-sm relative'>
                                    <Image src={item.image} alt={item.title} fill />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <p className='font-semibold text-[16px]'>{item.title}</p>
                                    <p className='font-semibold text-[16px]'>Rs {item.price}</p>
                                    <p className='font-semibold text-[16px]'>{item.size}</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center md:items-start md:ml-3 lg:ml-0 my-4 md:my-0 gap-x-10'>
                                <button
                                    onClick={() => deleteItemFromCart(item.id)}
                                >
                                    <RiDeleteBin6Line size={25} />
                                </button>
                                <div className="flex items-start gap-x-3 font-semibold text-[20px]">
                                    <div
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        className="font-bold text-[20px] ring-1 ring-black w-max px-2 cursor-pointer"
                                    >
                                        -
                                    </div>
                                    <div>{item.Quantity}</div>
                                    <div
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                        className="font-bold text-[20px] ring-1 ring-black w-max px-2 cursor-pointer"
                                    >
                                        +
                                    </div>

                                </div>
                                <div>
                                    <p>Rs <span className='font-semibold inline-block text-[20px]'>{item.SubTotal}
                                    </span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Summary */}
                <div className='bg-gray-300 w-[300px] lg:mt-0 mt-5 pt-1 pb-2 rounded-md'>
                    <div className='flex flex-col items-center'>
                        <h3 className='md:text-[30px] text-[20px]'>
                            Order Summary
                        </h3>
                        {/* line */}
                        <div className='w-[80%] h-[1px] bg-black mt-3'></div>
                        <div className='my-3 mx-3'>
                            <div className='flex items-center  mb-2 font-semibold text-[20px] gap-x-2'>
                                <p>Quantity: </p>
                                <p>{cartData.length}</p>
                            </div>
                            <div className='flex items-center  gap-x-2 '>
                                <p className='font-semibold text-[20px]'>Order Total: </p>
                                <p>Rs <span className='font-semibold text-[20px]'>
                                    {orderTotal}</span></p>
                            </div>
                            <div className='flex justify-center items-center mt-3 gap-x-2'>
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