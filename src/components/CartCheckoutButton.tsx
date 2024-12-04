import React from 'react'

interface Props {
    action?: () => void,
    name: string,
    icon?: React.ReactNode
}

const CartCheckoutButton:React.FC<Props> = ({action, name, icon}) => {
    return (
        <button
            onClick={action}
            className={`flex ${icon ? "gap-x-3" : ""}  items-center justify-center w-full md:w-1/2 transform hover:scale-105 transition-transform bg-[#14253D] opacity-80 text-white px-4 py-2 mt-5 rounded-md`}>
            <span className='text-[20px]'>{icon}</span>
            <span className='md:text-[18px] font-bold opacity-90 tracking-wide'>{name}</span>
        </button>
    )
}

export default CartCheckoutButton