import React, { useContext } from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp, IoHome } from 'react-icons/io5';
import { FcAbout } from 'react-icons/fc';
import { CgProfile } from 'react-icons/cg';

const MainLayout = () => {
    const { isOpen, setIsOpen } = useContext(AuthContext)


    return (
        <div className='max-h-screen'>
            <header className='bg-base-100 fixed w-full top-0 z-10 p-4'>
                <div className='flex justify-end items-center container mx-auto '>
                    <div className='space-x-4 mr-5'>
                        <Link to="/login">
                            <button className='uppercase font-semibold'>sign in</button>
                        </Link>
                        
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white btn border-4 btn-circle btn-success z-30'
                    >
                        {
                            isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />
                        }

                    </button>
                </div>
            </header>
            <main className='mt-20'>
                <Outlet />
            </main>
            <nav className='fixed w-full bottom-0'>
                <Navbar />
            </nav>
        </div>
    );
};

export default MainLayout;