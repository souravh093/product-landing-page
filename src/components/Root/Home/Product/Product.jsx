import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product, cartHandler}) => {
    const {id, title, price,  thumbnail, rating, description} = product;
    const navigate = useNavigate()
    const navigateDetails = () => {
        navigate(`product/${id}`)
    }
    return (
    <div className="w-full bg-base-100 border rounded-md cursor-pointer" >
    <figure><img className='h-52 w-full object-cover' src={thumbnail} alt="Shoes" /></figure>
    <div className='p-5'>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description.slice(0, 40)}...</p>
        <div className='flex gap-3 my-3'>
            <div>
                ⭐⭐⭐⭐
            </div>
            <div>
                {rating}
            </div>
        </div>
        <div className='flex justify-between'>
            <h2 className='text-xl font-bold'>{price} USD</h2>
            <div className='flex gap-1'>
            <button onClick={() => cartHandler(product)} className="bg-green-600 px-3 py-2 rounded-xl border border-gray-700 text-white">Add to cart</button>
            <button onClick={navigateDetails} className="bg-green-600 px-3 py-2 rounded-xl border border-gray-700 text-white">Details</button>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Product;