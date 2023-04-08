import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaUserAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className='px-24 flex justify-between py-3 border-b border-b-gray-300'>
                <div className='flex gap-10'>
                    <p className='text-green-500'>Chat with us</p>
                    <p>+10943827439</p>
                    <p>info@frescos.com</p>
                </div>
                <div className='flex gap-10 text-green-500'>
                    <Link to=''>Blog</Link>
                    <Link to=''>About</Link>
                    <Link to=''>Careers</Link>
                </div>
            </div>
            <div className='px-24 flex justify-between h-[130px] items-center'>
                <Link to='/'>
                <div>
                    <h1 className='text-3xl font-bold'>FreshCom</h1>
                </div>
                </Link>
                <div className='flex border items-center gap-5 px-3 rounded-lg'>
                    <div>
                        <h2 className='text-xl font-semibold'>All categories</h2>
                    </div>
                    <div>
                        |
                    </div>
                    <div className='flex'>
                        <input type="text" className='py-3 outline-none' placeholder='Search Product, categories' id="" />
                        <button className='px-3'><FaSearch /></button>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <FaUserAlt className='text-3xl' />
                    <Link to='/cart'>
                    <div className='relative'>
                        <FaShoppingBag className='text-3xl' />
                        <div className='absolute top-3 text-center right-3 bg-orange-500/90 text-white p-1 w-full rounded-full'>
                            <span>4</span>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className='flex bg-red-50 px-24 py-4 gap-20 text-xl'>
                <Link to=''>Bakery</Link>
                <Link to=''>Fruit and vegetables</Link>
                <Link to=''>Meat and fish</Link>
                <Link to=''>Drinks</Link>
                <Link to=''>Kitchen</Link>
                <Link to=''>Baby</Link>
                <Link to=''>Pharmacy</Link>
            </div>
        </div>
    );
};

export default Header;