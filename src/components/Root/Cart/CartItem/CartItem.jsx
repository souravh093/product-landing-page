import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const CartItem = ({product}) => {
    const {thumbnail, quantity, price} = product;
    return (
        <li className='flex shadow-sm justify-between gap-10 bg-gray-100 p-3 rounded-lg'>
           <div className='flex items-center gap-3'>
            <img src={thumbnail} className='w-20 h-20 object-cover' alt="" />
            <div className='flex flex-col gap-2'>
                <div>
                    <h2 className='text-xl font-semibold'>Smart Air Fryer</h2>
                    <h2>Quantity: {quantity}</h2>
                </div>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <FaWindowClose className='text-red-500' />
                    Remove
                </div>
            </div>
           </div>
           <div className='flex flex-col justify-center'>
                <h2 className='text-xl font-semibold flex justify-end'>{price}$</h2>
                <p>Total: {price * quantity}$</p>
            </div> 
        </li>
    );
};

export default CartItem;