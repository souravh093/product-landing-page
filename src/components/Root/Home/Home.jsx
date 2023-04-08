import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product/Product';
import { addToDb } from '../../../../utilities/fakeDB';

const Home = () => {
    const products = useLoaderData().products;
    const detailsHandler = (product) => {
        console.log(product.title)
        addToDb(product.id)
    }
    return (
        <div className='px-24'>
            <div className='text-6xl font-bold py-10'>
                <h1>Fruit and vegetables</h1>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                <div className='col-span-1 flex flex-col gap-10'>
                    <div>
                        <h1 className='text-2xl font-bold mb-3'>Categories</h1>
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between items-center'><p className='text-lg'>Bakery</p><span className='text-lg text-green-500 bg-green-200 p-1 rounded-xl'>320</span></div>
                            <div className='flex justify-between items-center'><p className='text-lg'>Fruit and vegetables</p><span className='text-lg text-green-500 bg-green-200 p-1 rounded-xl'>130</span></div>
                            <div className='flex justify-between items-center'><p className='text-lg'>Meat and fish</p><span className='text-lg text-green-500 bg-green-200 p-1 rounded-xl'>520</span></div>
                            <div className='flex justify-between items-center'><p className='text-lg'>Drinks</p><span className='text-lg text-green-500 bg-green-200 p-1 rounded-xl'>19</span></div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-3'>Brands</h1>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center'><input className='h-6 w-6 border-gray-300 rounded-sm checked:bg-green-500' type="checkbox" name="" id="" /><p className='text-lg'>Filter by Drinks</p></div>
                            <div className='flex gap-5 items-center'><input className='h-6 w-6 border-gray-300 rounded-sm checked:bg-green-500' type="checkbox" name="" id="" /><p className='text-lg'>Filter by Fruit and vegetables</p></div>
                            <div className='flex gap-5 items-center'><input className='h-6 w-6 border-gray-300 rounded-sm checked:bg-green-500' type="checkbox" name="" id="" /><p className='text-lg'>Filter by Baby</p></div>
                            <div className='flex gap-5 items-center'><input className='h-6 w-6 border-gray-300 rounded-sm checked:bg-green-500' type="checkbox" name="" id="" /><p className='text-lg'>Filter by Pharmacy</p></div>
                            <div className='flex gap-5 items-center'><input className='h-6 w-6 border-gray-300 rounded-sm checked:bg-green-500' type="checkbox" name="" id="" /><p className='text-lg'>Filter by Kitchen</p></div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className='col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product detailsHandler={detailsHandler} product={product} key={product.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;