import React from 'react';
import { useForm } from 'react-hook-form';

const JoinCommunitePage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content z-10">
                <div className="card bg-base-100 w-full max-w-2xl px-5 py-10 shadow-2xl">
                    <h1 className='text-2xl text-center text-green-500 font-semibold'>GPC Volunteer Joining  Form...</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-5 grid grid-cols-12" >
                        {/* name  */}
                        <div className="form-control col-span-12 md:col-span-6">
                            <label className="label block text-sm font-medium text-gray-700 mb-1">
                                <span className="label-text">Name</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Write your name..." className="input input-bordered w-full" />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">Write your name*</p>
                            )}
                        </div>
                        {/* mobile number */}
                        <div className="form-control col-span-12 md:col-span-6">
                            <label className="block label text-sm font-medium text-gray-700 mb-1">
                                <span className="label-text">Mobile Number</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <input {...register("mobileNumber", { required: true, min: 11, max: 11 })} type="number" placeholder="Write your mobile number..." className="input input-bordered w-full" />
                            {errors.mobileNumber && (
                                <p className="text-red-500 text-sm mt-1">Write your mobile number*</p>
                            )}
                        </div>
                        {/* date of birth  */}
                        <div className="form-control col-span-12 md:col-span-6">
                            <label className="block label text-sm font-medium text-gray-700 mb-1">
                                <span className="label-text">Date of Birth</span>
                                <span className="text-red-500">*</span>
                            </label>
                            <input {...register("birthDate", { required: true })} type="date" placeholder="" className="input input-bordered w-full" />
                            {errors.birthDate && (
                                <p className="text-red-500 text-sm mt-1">Select your date of birth*</p>
                            )}
                        </div>
                        {/* occupation */}
                        <div className="form-control col-span-12 md:col-span-6">
                            <label className="block label text-sm font-medium text-gray-700 mb-1">
                                Your Occupation <span className="text-red-500">*</span>
                            </label>
                            <select
                                {...register("occupation", { required: true })}
                                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                            >
                                <option value="">Select an option</option>
                                <option value="Student">Student</option>
                                <option value="Service">Service</option>
                                <option value="Retired">Retired</option>
                                <option value="Business">Business</option>
                                <option value="Housewife">Housewife</option>
                                <option value="Others">Others</option>
                            </select>
                            {errors.occupation && (
                                <p className="text-red-500 text-sm mt-1">Select you occupation*</p>
                            )}
                        </div>
                        {/* blood group */}
                        <div className='form-control col-span-12 md:col-span-6'>
                            <label className="block label text-sm font-medium text-gray-700 mb-1">
                                Blood Group <span className="text-red-500">*</span>
                            </label>
                            <select
                                {...register('bloodGroup', { required: true })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">-- Select Blood Group --</option>
                                <option value="I DONT KNOW">I DONT KNOW</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                            {errors.bloodGroup && <p className="text-red-500 text-xs mt-1">Select your blood group*</p>}
                        </div>
                        {/* location  */}
                        <div className="form-control col-span-12 md:col-span-6">
                            <label className="block label text-sm font-medium text-gray-700 mb-1">
                                <span className="label-text">Your Location
                                </span>
                                <span className="text-red-500">*</span>
                            </label>
                            <input {...register("location", { required: true })} type="text" placeholder="(Area + District Name)" className="input input-bordered w-full" />
                            {errors.location && <p className="text-red-500 text-xs mt-1">Add your location*</p>}
                        </div>
                        {/* opinion */}
                        <div className='form-control col-span-12'>
                            <label className=" text-sm font-medium text-gray-700 mb-1">
                                Share your opinion or thoughts. Why will you join GPC community?
                            </label>
                            <textarea
                                {...register('opinion', { required: true })}
                                rows={4}
                                placeholder="Write your opinion here..."
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                            ></textarea>
                            {errors.opinion && <p className="text-red-500 text-xs mt-1">This field is required*</p>}
                        </div>

                        <div className="form-control">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinCommunitePage;