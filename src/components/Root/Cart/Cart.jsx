import React, { useEffect, useState } from 'react';
import { getToDb } from '../../../../utilities/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    // const [cart, setCart] = useState([]);
    // const cartData = useLoaderData().products;
    // useEffect(() => {
    //     // let cart = []; 
    // const saveCart = getToDb()
    // let newCart = [];
    // for (const id in saveCart) {
    //     const foundProduct = cartData.find(product => product.id === parseFloat(id));
    //     if (foundProduct) {
    //         foundProduct.quantity = saveCart[id]
    //         newCart.push(foundProduct);
    //     }
    // }
    // setCart(newCart);
    // }, [])
    const {newCart} = useLoaderData();
    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-50 text-gray-900'>
            <div className='flex flex-col max-w-4xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold '>{newCart.length ? 'Review cart items' : 'Cart is empty'}</h2>
                <ul className='flex flex-col gap-5'>
                    {
                        newCart.map(product => <CartItem product={product} key={product.id} />)
                    }
                </ul>
                <div>
                    <p>Total amount: 1156$</p>
                    <p>Not including taxes and shipping cost</p>
                </div>
                <div className='flex gap-3'>
                    {
                        newCart.length ? <button className='shadow-lg p-3 text-xl rounded-2xl border-2 border-green-400 hover:bg-green-500 hover:text-white transition-all'>Clear Cart</button> : <Link to='/'><button className='shadow-lg p-3 text-xl rounded-2xl border-2 border-green-400 hover:bg-green-500 hover:text-white transition-all'>Back to Shop</button></Link>
                    }
                    <button className='shadow-lg p-3 text-xl border-2 rounded-2xl bg-green-500 text-white hover:bg-transparent hover:text-black  hover:border-green-500 transition'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;