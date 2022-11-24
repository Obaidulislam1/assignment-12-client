import React from 'react';
import { FaUserFriends,FaStopwatch,FaHeadphones,FaShirtsinbulk } from 'react-icons/fa';

const Section = () => {
    return (
        <div>
        <div className='mb-10'>
            <h1 className='text-center font-bold text-3xl'>Customer Review</h1>
            <p className='text-center font-bold'>the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
            <div className="card w-full glass mx-auto p-5">

                <div className='avatar flex items-center'>
                    <div className='w-20 h-20 rounded-full avatar ml-3 mt-5'>
                        <img src="https://image.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg" alt="car!" />
                    </div>
                    <h2 className="card-title ml-5">Md Bosir mia</h2>
                </div>
                <div className="rating mt-3 ml-5 mb-3">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-body p-0">

                    <p className='text-center'>With its user-friendy interface, we've seen responses to surveys and feedback improve drastically.</p>
                </div>
            </div>
            <div className="card w-full glass mx-auto p-5">

                <div className='avatar flex items-center'>
                    <div className='w-20 h-20 rounded-full avatar ml-3 mt-5'>
                        <img src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=" alt="car!" />
                    </div>
                    <h2 className="card-title ml-5">D Korim</h2>
                </div>
                <div className="rating mt-3 ml-5 mb-3">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-body p-0">
                    <p className='text-center'>Typeform allowed us to get to the core of what our product should be—what features to focus on, and where people are struggling.</p>
                </div>
            </div>
             <div className="card w-full glass mx-auto p-5">

                <div className='avatar flex items-center'>
                    <div className='w-20 h-20 rounded-full avatar ml-3 mt-5'>
                        <img src="https://www.cdc.gov/cancer/breast/men/images/man-ribbon-1200x630.jpg?_=59339" alt="car!" />
                    </div>
                    <h2 className="card-title ml-5">Jamil sorkar</h2>
                </div>
                <div className="rating mt-3 ml-5 mb-3">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-body p-0">
                    <p className='text-center'>Ask for more detail when you need it, or skip questions entirely. People share more when surveys feel relevant.</p>
                </div>
            </div>
        </div>
        <div>
            <div className='mb-5'>
                <h1 className='text-center font-bold text-3xl'>Why Choose Us</h1>
                <p className='text-center font-bold'>the majority have suffered alteration in some form, by injected humour, <br />  or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 mb-5'>
                <div className=' m-5 w-40'>
                <FaUserFriends className='mx-auto text-5xl'/>
                    <p className='text-center'>Expert Team</p>
                </div>
                <div className=' m-5 w-40'>
                    <FaStopwatch className='mx-auto text-5xl'/>
                    <p className='text-center'>Timely Delivery</p>
                </div>
                <div className=' m-5 w-40'>
                    <FaHeadphones className='mx-auto text-5xl'/>
                    <p className='text-center'>24/7 Support</p>
                </div>
                <div className=' m-5 w-40'>
                    <FaShirtsinbulk className='mx-auto text-5xl'/>
                    <p className='text-center'>100% Fresh Product</p>
                </div>
            </div>

        </div>
    </div>
    );
};

export default Section;