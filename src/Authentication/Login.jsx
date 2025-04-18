import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {handleSingIn}=useContext(AuthContext)
    const [isShow, setIsShow] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        handleSingIn(data?.email, data?.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    return (
        <div className='min-h-screen bg-login-img bg-cover bg-center'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card bg-slate-800 backdrop-blur-sm   text-white border-pink-400 border-2 backdrop-filter w-full max-w-sm bg-opacity-30 shadow-2xl py-5">
                        <h1 className='text-3xl font-bold text-center text-pink-400'>Welcome</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-5">
                            <div className="form-control space-y-2">
                                <label className="label">
                                    <span className="label-text text-lg font-bold italic">Email</span>
                                </label>
                                <div className='flex relative'>
                                    <input
                                        {...register("email", { required: true })}
                                        aria-invalid={errors.email ? "true" : "false"}
                                        type="email" placeholder="Write your email..." className="input border-0 border-b-4 border-l-2 w-72 focus:border-pink-300 focus:border-b-2 appearance-none bg-transparent focus:outline-none focus:border-l-0 placeholder:font-semibold" />
                                    <MdEmail size={18} className='-translate-x-5 translate-y-3' />
                                </div>
                                {errors.email?.type === "required" && (
                                    <p role="alert">Email is required</p>
                                )}

                            </div>
                            <div className="form-control space-y-2">
                                <label className="label">
                                    <span className="label-text text-lg  font-bold italic">Password</span>
                                </label>
                                <div className='flex relative'>
                                    <input
                                    {...register("password", { required: "Password is required" })}
                                    aria-invalid={errors.password ? "true" : "false"}
                                    type={`${isShow ? "text" : "password"}`} placeholder="* * * * * * * *" className="input border-0 border-b-4 border-l-2 w-72 focus:border-pink-300 focus:border-l-0 appearance-none bg-transparent focus:outline-none placeholder:font-bold focus:border-b-2" />
                                    <div className=''>
                                        {
                                            isShow ? <span onClick={() => setIsShow(!isShow)}>
                                                <IoEye size={18} className='-translate-x-5 translate-y-3' />
                                            </span> : <span onClick={() => setIsShow(!isShow)}>
                                                <IoEyeOff size={18} className='-translate-x-5 translate-y-3' />
                                            </span>
                                        }
                                    </div>
                                </div>
                                {errors.password && <p role="alert">{errors.password.message}</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline outline-pink-500 hover:bg-pink-400 w-full">Login</button>
                            </div>
                        </form>
                        <div>
                            <h1 className='text-center -mt-4'>Don't have account?<span className='ml-4 font-bold text-pink-600 hover:underline uppercase'><Link to="/sign-up">Sign Up</Link></span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;