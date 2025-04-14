import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosPhotos, IoMdPerson } from 'react-icons/io';
import { useForm } from "react-hook-form";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate()
    const { handleCreateUser } = useContext(AuthContext)
    const [isShow, setIsShow] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // toast("hi")
        // console.log(data)
        console.log(data.email, data.password)
        // return
        handleCreateUser(data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                toast.success("Login Successfully")
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
            })
    };
    return (
        <div className='bg-register-img bg-cover bg-no-repeat bg-center min-h-screen'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card bg-green-800 text-white border-slate-800 backdrop-filter w-full max-w-sm bg-opacity-30 shadow-2xl py-5">
                        <h1 className='text-3xl font-bold text-center text-gray-200'>Welcome</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-3">
                            <div className="form-control space-y-1">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Name*</span>
                                </label>
                                <div className='flex relative'>
                                    <input {...register("name", { required: true, maxLength: 20 })} type="text" placeholder="Write your name..." className="input border-0 border-b-4 border-l-2 w-72 focus:border-gray-300 focus:border-b-2 appearance-none bg-transparent focus:outline-none  focus:border-l-0 placeholder:font-semibold placeholder:text-white" />
                                    <IoMdPerson size={18}
                                        className='-translate-x-5 translate-y-3 text-white' />
                                </div>
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control space-y-1">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Photo</span>
                                </label>
                                <div className='flex relative'>
                                    <input type="file" placeholder="Write your email..." className="input border-0 border-b-4 border-l-2 w-72 focus:border-gray-300 focus:border-b-2 appearance-none bg-transparent focus:outline-none  focus:border-l-0 placeholder:font-semibold placeholder:text-white" />
                                    <IoIosPhotos size={18} className='-translate-x-5 translate-y-3' />
                                </div>

                            </div>
                            <div className="form-control space-y-1">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Email*</span>
                                </label>
                                <div className='flex relative'>
                                    <input  {...register("email", { required: true })} type="email" placeholder="Write your email..." className="input border-0 border-b-4 border-l-2 w-72 focus:border-gray-300 focus:border-b-2 appearance-none bg-transparent focus:outline-none  focus:border-l-0 placeholder:font-semibold placeholder:text-white" />
                                    <MdEmail size={18} className='-translate-x-5 translate-y-3' />
                                </div>
                                {errors.email && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control space-y-1">
                                <label className="label">
                                    <span className="label-text text-lg  font-bold">Password*</span>
                                </label>
                                <div className='flex relative'>
                                    <input {...register("password", {
                                        min: 8,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, required: true
                                    })} type={`${isShow ? "text" : "password"}`} placeholder="Type your password..." className="input border-0 border-b-4 border-l-2 w-72 focus:border-gray-300 focus:border-l-0 appearance-none bg-transparent focus:outline-none placeholder:font-semibold focus:border-b-2 placeholder:text-white" />

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
                                {errors.password && <span className="text-red-500">*Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g. @, $, !, %, , ?, &). Minimum length is 8 characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline w-full">Login</button>
                            </div>
                        </form>
                        <div>
                            <h1 className='text-center -mt-4'>Have an account?<span className='ml-4 uppercase font-bold text-primary hover:underline'><Link to="/login">login</Link></span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;