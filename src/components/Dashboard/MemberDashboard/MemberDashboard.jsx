import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { FaHourglassStart } from 'react-icons/fa';
import { MdPending } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaBullhorn } from 'react-icons/fa6';
import AdminDashboardComponent from '../AdminDashboard/AdminDashboardComponent';

const MemberDashboard = () => {
    const { isOpen, setIsOpen } = useContext(AuthContext)
    const status = "admin"
    return (
        <div>
            <ul>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="My Profile">
                    <NavLink to="/my-profile" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        <CgProfile size={24}></CgProfile>
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>My Profile</span>
                    </NavLink>
                </li>
                {
                    status == "admin" && <AdminDashboardComponent />
                }
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Pending Case">
                    <NavLink to="/pending-case" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <MdPending size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Pending Case</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Rest Case">
                    <NavLink to="rest-case" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <FaHourglassStart size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Rest Case</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Notice Board">
                    <NavLink to="notice-board" className='flex items-center p-4 hover:bg-green-900 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <FaBullhorn size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Notice Board</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MemberDashboard;