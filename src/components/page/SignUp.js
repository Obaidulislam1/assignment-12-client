import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import image from '../../image/login.jpg'

const SignUp = () => {
   
const {register,handleSubmit} = useForm()

const handleSignUp = (data) =>{
console.log(data)
}

    return (
        <div className="hero w-full">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left mx-auto">
                <img src={image} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input name='name' type="text"
                        {...register("name")} placeholder="name" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" 
                        {...register("email")} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password"
                        {...register("password")} placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign up"/>
                    </div>
                    <p className='text-center'>Have an account? <Link className='text-orange-500 text-bold' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;