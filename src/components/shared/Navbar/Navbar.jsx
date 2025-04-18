
import { NavLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaFacebook } from 'react-icons/fa';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';

const Navbar = () => {

    return (
        <div className=' bottom-0 relative'>
            <div className='container mx-auto flex flex-col gap-4 items-end justify-between md:px-10 p-4 '>
                <div data-tooltip-id="my-tooltip" data-tooltip-content="Our Facebook Group">
                    {/* <span>Profile</span> */}
                    <a href='https://www.facebook.com/groups/530950651223157' target='_blank' className="btn bg-[#c44f53] text-white"><FaFacebook size={24}/></a>
                </div>
                <div data-tooltip-id="my-tooltip" data-tooltip-content="Home">
                    {/* <span>Home</span> */}
                    <NavLink to="/" className="btn bg-[#c44f53] text-white"><IoHome size={24} /></NavLink>
                </div>
                <div data-tooltip-id="my-tooltip" data-tooltip-content="About Us">
                    {/* <span>About</span> */}
                    <NavLink to="/about-us" className="btn bg-[#c44f53] text-white"><FcAbout size={24} /></NavLink>
                </div>
            </div>
            <Tooltip positionStrategy="fixed" id="my-tooltip" className='z-[99999]' place='top' />
        </div>
    );
};

export default Navbar;