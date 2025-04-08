import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { FaHourglassStart } from 'react-icons/fa';
import { MdPending } from 'react-icons/md';
import AdminDashboard from '../AdminDashboard/AdminDashboardComponent';
import { CgProfile } from 'react-icons/cg';
import { FaBullhorn } from 'react-icons/fa6';

const MemberDashboard = () => {
    const { isOpen, setIsOpen } = useContext(AuthContext)
    const status = "admin"
    return (
        <div>
            <ul>
                <NavLink to="/my-profile" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    <CgProfile size={24}></CgProfile>
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>My Profile</span>
                </NavLink>
                {
                    status == "admin" && <AdminDashboard />
                }
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
                <NavLink to="rest-case" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                    {/* <FaHome size={24} /> */}
                    <FaBullhorn size={24} />
                    <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Notice Board</span>
                </NavLink>
            </ul>
        </div>
    );
};

export default MemberDashboard;