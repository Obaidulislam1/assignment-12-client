import React from 'react';
import symphony from '../../image/symphony1.png';
import walton from '../../image/walton.jpeg';
import oppo from '../../image/oppo1.jpeg';
import ProductCard from './ProductCard';

const Product = () => {

    const category = [
        {
            category_id: 1,
            img: symphony
        },
        {
            category_id: 2,
            img: walton
        },
        {
            category_id: 3,
            img: oppo
        }
    ]

    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold text-center'>Our Product</h1>
                <p className='text-center font-bold'>Mobile phones started to become popular in Bangladesh in the late 90s. The first phones were way oversized compared to any phone of today. There was an antenna on top of the phone, and they used to be quite troublesome to carry because of their weight.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
                {
                    category.map(item => <ProductCard
                        key={item.category_id}
                        item={item}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};
export default Product;