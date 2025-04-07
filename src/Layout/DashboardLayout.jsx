import React, { useContext, useEffect } from 'react';
import { FaBars, FaHome } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { SiGoogleforms } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";
import { MdPending } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa6";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";

const DashboardLayout = () => {
    const people = true;
    const member = false;
    const { isOpen, setIsOpen } = useContext(AuthContext)
    return (
        <div className='flex flex-col justify-center'>
            <div className={`fixed w-20 top-0 z-50 text-white left-0 h-full bg-green-800 transition-width duration-700 ${isOpen ? "w-64" : "w-20"}`}>
                <div className='flex justify-between items-center p-4'>
                    <div className={`text-xl flex font-bold items-center`}>
                        <span className='bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center text-xs text-white font-bold'>GPC</span>
                        <span className={`ml-2 ${isOpen ? "block" : "hidden"}`}>
                            GPC
                        </span>
                    </div>
                    {/* <button onClick={() => setIsOpen(!isOpen)} className='block md:hidden'>
                        {
                            isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />
                        }

                    </button> */}

                </div>
                <nav className=''>
                    <ul>
                        <NavLink to="/" onClick={() => setIsOpen(false)} className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer ${member && "hidden"}`} >
                            <SiGoogleforms size={24} />
                            {/* <FaHome size={24} /> */}
                            <span className={`ml-4  ${isOpen ? "block" : "hidden"}`}>Join Our Community</span>

                        </NavLink>
                        {
                            member && <ul>
                                <NavLink to="/my-profile" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                                    {/* <FaHome size={24} /> */}
                                    <BsPeopleFill size={24} />
                                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>My Profile</span>
                                </NavLink>
                                <NavLink to="/pending-case" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                                    {/* <FaHome size={24} /> */}
                                    <MdPending size={24} />
                                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Pending Case</span>
                                </NavLink>
                                <NavLink to="rest-case" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                                    {/* <FaHome size={24} /> */}
                                    <FaHourglassStart size={24} />
                                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Rest Case</span>
                                </NavLink>
                            </ul>
                        }
                        <NavLink to="/mentionable-works" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                            {/* <FaHome size={24} /> */}
                            <BsFillTrophyFill size={24} />
                            <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Mentionable Work</span>
                        </NavLink>
                        <NavLink to="/blogs" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                            {/* <FaHome size={24} /> */}
                            <FaBook size={24} />
                            <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Blogs</span>
                        </NavLink>
                    </ul>

                </nav>
            </div>
            <div className='ml-20 p-4 min-h-screen flex-1 border-2'>
                {/* <div className='flex justify-between items-center bg-green-200'>
                    <div className='bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center text-xs text-white font-bold'>GPC</div>
                    <button onClick={() => setIsOpen(!isOpen)} className=''>
                        {
                            isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />
                        }

                    </button>
                </div> */}
                <Outlet />
            </div>

        </div>
    );
};

export default DashboardLayout;