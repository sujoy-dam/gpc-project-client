import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { BsFillTrophyFill } from 'react-icons/bs';
import { MdCreate, MdCreateNewFolder, MdDashboard } from "react-icons/md";
import { ImUsers } from 'react-icons/im';
import { StickyNote, UserPlus } from 'lucide-react';
import { IoCreateOutline } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const AdminDashboardComponent = () => {
    const { isOpen, setIsOpen } = useContext(AuthContext)
    return (
        <div>
            <ul>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Admin Dashboard">
                    <NavLink to="/admin-dashboard" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <MdDashboard size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Admin Dashboard</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Manage Users">
                    <NavLink to="/manage-users" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        <ImUsers size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Manage Users</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Member Request">
                    <NavLink to="/member-request" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <UserPlus size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Member Request</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Post Mentionable Work">
                    <NavLink to="/post-mentionable-works" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <StickyNote size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Post Mentionable Work</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Post Blog">
                    <NavLink to="/post-blog" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <MdCreate size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Post Blog</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Post Case">
                    <NavLink to="/post-case" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <MdCreateNewFolder size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Post Case</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Post Announcement">
                    <NavLink to="/add-announcement" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <IoCreateOutline size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Post Anouncement</span>
                    </NavLink>
                </li>

            </ul>
            {!isOpen && <Tooltip positionStrategy="fixed" id="my-tooltip" className='z-[99999]' place='top' />}
        </div>
    );
};

export default AdminDashboardComponent;