import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
import ServiceCard from './ServiceCard';

const Service = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
           }
           <Modal></Modal>
        </div>
    );
};

export default Service;