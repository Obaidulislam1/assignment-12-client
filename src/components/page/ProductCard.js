import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
    const {img,category_id} = item;
    return (
        <div>
           <Link to={`/service/${category_id}`}>
           <figure><img src={img} alt="Shoes"  className='w-full h-52 rounded-lg'/></figure>
           </Link>
        </div>
    );
};
export default ProductCard;