import React from 'react';

const ServiceCard = ({ service }) => {
    const { picture, name, description, price
    } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>price: {price} tk</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};
export default ServiceCard;