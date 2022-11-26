import React from 'react';

const ProductCard = ({item}) => {
    return (
        <div>
           <figure><img src={item.img} alt="Shoes"  className='w-full h-52 rounded-lg'/></figure> 
        </div>
    );
};

export default ProductCard;