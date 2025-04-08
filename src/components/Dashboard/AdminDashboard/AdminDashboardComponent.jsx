import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { BsFillTrophyFill } from 'react-icons/bs';
import { MdCreate, MdCreateNewFolder, MdDashboard } from "react-icons/md";
import { ImUsers } from 'react-icons/im';
import { StickyNote, UserPlus } from 'lucide-react';
import { IoCreateOutline } from 'react-icons/io5';

const AdminDashboardComponent = () => {
    const { isOpen, setIsOpen } = useContext(AuthContext)
    return (
        <div>
            <ul>
                <NavLink to="/admin-dashboard" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    {/* <FaHome size={24} /> */}
                    <MdDashboard size={24} />
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Admin Dashboard</span>
                </NavLink>
                <NavLink to="/mentionable-works" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    <ImUsers size={24}/>
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Manage Users</span>
                </NavLink>
                <NavLink to="/member-request" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    {/* <FaHome size={24} /> */}
                    <UserPlus size={24} />
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Member Request</span>
                </NavLink>
                <NavLink to="/mentionable-works" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    {/* <FaHome size={24} /> */}
                    <StickyNote size={24}/>
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Post Mentionable Work</span>
                </NavLink>
                <NavLink to="/mentionable-works" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    {/* <FaHome size={24} /> */}
                    <MdCreate size={24}/>
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Post Blog</span>
                </NavLink>
                <NavLink to="/mentionable-works" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    {/* <FaHome size={24} /> */}
                    <MdCreateNewFolder size={24}/>
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Post Case</span>
                </NavLink>
                <NavLink to="/mentionable-works" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    {/* <FaHome size={24} /> */}
                    <IoCreateOutline size={24}/>
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Post Anouncement</span>
                </NavLink>
            </ul>
        </div>
    );
};

export default AdminDashboardComponent;