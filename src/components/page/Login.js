import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { SignIn,googleSignIn } = useContext(AuthContext);
    const [loginerror, setLoginerror] = useState('');
    const handleLogin = data => {
        setLoginerror('');
        console.log(data)
        SignIn(data.email, data.password)

            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                setLoginerror(err.message)
            })
    }
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password"
                            {...register("password", {
                                required: "password is required"
                            })} />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">forget password?</span>
                        </label>
                    </div>
                    <div>
                        {loginerror && <p className='text-red-500'>{loginerror}</p>}
                    </div>
                    <input className='btn btn-primary p-4 w-full' value='Login' type="submit" />

                </form>
                <p className='text-center mt-2'>New to webside? <Link to='/signup'>Sign up</Link></p>
                <div className="divider">OR</div>
                <div className='flex justify-center'>
                    <button onClick={handleGoogle}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;