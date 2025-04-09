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
import { IoCloseSharp } from 'react-icons/io5';
import People from '../components/Dashboard/People/People';
import MemberDashboard from '../components/Dashboard/MemberDashboard/MemberDashboard';
import AdminDashboardComponent from '../components/Dashboard/AdminDashboard/AdminDashboardComponent';

const DashboardLayout = () => {
    // const people = true;
    const status = "admin"
    const { isOpen, setIsOpen } = useContext(AuthContext)
    return (
        <div className='flex flex-col justify-center'>
            <div className={`fixed overflow-y-auto w-20 top-0 z-50 text-white left-0 h-full bg-green-800 transition-width duration-700 ${isOpen ? "w-64" : "w-20"}`}>
                <div className='flex justify-between items-center p-4'>
                    <div className={`flex font-semibold items-center`}>
                        <span className='bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center text-xs text-white font-bold'>GPC</span>
                        <p className={`text-sm ml-2 ${isOpen ? "block" : "hidden"}`}>
                            Guardian of Paws and Claws
                        </p>
                    </div>
                </div>
                <nav className='font-semibold'>

                    {
                        status == "member" && <MemberDashboardComponent />
                    }
                    {
                        status == "admin" && <MemberDashboard />
                    }
                    {/* {
                            admin && member === true && <AdminDashboard/>
                        } */}
                    {
                        <People />
                    }
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