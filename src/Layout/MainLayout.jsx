import React, { useContext } from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaBars, FaRegUserCircle } from 'react-icons/fa';
import { IoCloseSharp, IoHome } from 'react-icons/io5';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    const { isOpen, setIsOpen, user, handleSignOut } = useContext(AuthContext)
    console.log(user)


    return (
        <div className='max-h-screen container mx-auto'>
            <header className='bg-base-100 fixed w-full top-0 z-20 p-4 lg:px-10 overflow-x-auto'>
                <div className='flex justify-end items-center container mx-auto '>
                    <div className='space-x-4'>
                        {
                            user ?
                                <button onClick={() => handleSignOut()} className='uppercase font-semibold'>log out</button>

                                :
                                <Link to="/login">
                                    <button className='uppercase font-semibold'>sign in</button>
                                </Link>
                        }

                        {/* <div className='bg-red-500 border-4'>
                            {
                                user?.photoURL ? <img className='w-12' src={"user?.photoURL"} alt="" /> : <FaRegUserCircle size={24}/>
                            }
                        </div> */}

                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white mr-2 ml-5 btn bg-green-800 outline-2 outline-green-700 z-30'
                    >
                        {
                            isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />
                        }

                    </button>
                    <div>
                        {
                            user?.photoURL ? <img src={user?.photoURL} alt="" /> : <FaRegUserCircle size={30} />
                        }
                    </div>
                </div>
            </header>
            <main className='mt-20'>
                <Outlet />
            </main>
            <nav className='fixed w-full bottom-0'>
                <Navbar />
            </nav>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;