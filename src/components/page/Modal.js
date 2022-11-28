import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../authProvider/AuthProvider';

const Modal = ({ booking,setBooking }) => {
    const { name, resale, location, date} = booking;
    const {user} = useContext(AuthContext);
    console.log(booking)

const handleBuy = event =>{
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const email = form.email.value;
    const number = form.number.value;

    const buyDetails = {
        product: name,
        location,
        resale,
        date,
        name: username,
        email,
        number
    }
    console.log(buyDetails);
    
    fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(buyDetails)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
            setBooking(null)
            toast.success('Order Confirm')
        }
    })
   
}

    return (
        <>
            <input type="checkbox" id="BuyNow-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <p className='text-center text-2xl font-bold'>Order Details</p>
                    <label htmlFor="BuyNow-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Product name: {name}</h3>
                    <h3 className="text-lg font-bold">Prize: {resale}</h3>
                    <h3 className="text-lg font-bold">Location: {location}</h3>
                    <h3 className="text-lg font-bold">Post-date: {date}</h3>
                    <form onSubmit={handleBuy}>
                        <span className='flex items-center mt-2'>
                            <p className='text-lg mr-5'>Name</p>
                            <input type="text" name='name'
                             defaultValue={user?.displayName}  placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" readOnly/></span>
                        <span className='flex items-center mt-2'>
                            <p className='text-lg mr-5'>Email  </p>
                            <input type="email" name='email' placeholder="Type here" defaultValue={user?.email} className="input input-bordered input-sm w-full max-w-xs" readOnly/></span>
                        <span className='flex items-center mt-2'>
                            <p className='text-lg mr-5'>Number</p>
                            <input type="text" name='number' placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" /></span>
                        <div className='flex justify-center mt-5'>
                            <input className='btn btn-primary' type="submit" value="Submit" required/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;