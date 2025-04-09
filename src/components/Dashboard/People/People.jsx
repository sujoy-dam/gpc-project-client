import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';
import { BsFillTrophyFill } from 'react-icons/bs';
import { SiGoogleforms } from 'react-icons/si';
import { FaBook } from 'react-icons/fa';

const People = () => {
    // const status =  "member"
    const status = "admin"

    const { isOpen, setIsOpen } = useContext(AuthContext)
    return (
        <div>
            <ul>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Join Our Community">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer ${status == "member" || status == "admin" && "hidden"}`} >
                        <SiGoogleforms size={24} />
                        {/* <FaHome size={24} /> */}
                        <span className={`ml-4  ${isOpen ? "block" : "hidden"}`}>Join Our Community</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Mentionable Work">
                    <NavLink to="/mentionable-works" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <BsFillTrophyFill size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Mentionable Work</span>
                    </NavLink>
                </li>
                <li data-tooltip-id="my-tooltip" data-tooltip-content="Blogs">
                    <NavLink to="/blogs" className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                        {/* <FaHome size={24} /> */}
                        <FaBook size={24} />
                        <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Blogs</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default People;