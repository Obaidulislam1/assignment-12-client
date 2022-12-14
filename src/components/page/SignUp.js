import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../image/login.jpg'
import { AuthContext } from '../authProvider/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext)
    const [signuperror, setSignuperror] = useState('')
    const navigate = useNavigate()

    const handleSignUp = (data) => {
        console.log(data)
        setSignuperror('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('user Created successfully.');
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        alluser(data.name, data.email);
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => {
                console.log(err)
                setSignuperror(err)
            });
    }

    const alluser = (name, email) =>{
        const user = {name, email };
        fetch('http://localhost:5000/allUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/');

            })
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
                                {...register("name", {
                                    required: 'name is required'
                                })} placeholder="name" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email"
                                {...register("email", {
                                    required: true
                                })} placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password"
                                {...register("password", {
                                    required: 'password is required',
                                    minLength: { value: 6, message: 'password must be 6 characters long' },
                                    pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong' }
                                })} placeholder="password" className="input input-bordered" />
                        </div>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        {signuperror && <p className='text-red-500'>{signuperror}</p>}
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                        <p className='text-center'>Have an account? <Link className='text-orange-500 text-bold' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;