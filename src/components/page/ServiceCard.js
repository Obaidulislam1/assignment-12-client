import React from 'react';

const ServiceCard = ({ service,setBooking }) => {
    const { picture, name, description, price, location, resale, use,date
    } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-bold p-0'>Market price:</span> {price} tk</p>
                <p><span className='font-bold'>location:</span> {location}</p>
                <p><span className='font-bold'>Use:</span> {use} Month</p>
                <p><span className='font-bold'>Resale Price:</span> {resale}</p>
                <p><span className='font-bold'>date:</span> {date}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <label htmlFor="BuyNow-Modal"
                    onClick={() => setBooking(service)}
                     className="btn btn-primary"
                     >Buy Now</label>
                </div>
            </div>
        </div>
    );
};
export default ServiceCard;