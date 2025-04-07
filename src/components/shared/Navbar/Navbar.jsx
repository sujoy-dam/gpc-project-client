
import { NavLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {

    return (
        <div className=' bottom-0 relative'>
            <div className='container mx-auto flex flex-col gap-4 items-end justify-between md:px-10 p-4 '>
                <div>
                    {/* <span>Profile</span> */}
                    <NavLink className="btn btn-success"><CgProfile size={24} /></NavLink>
                </div>
                <div>
                    {/* <span>Home</span> */}
                    <NavLink className="btn btn-success"><IoHome size={24} /></NavLink>
                </div>
                <div>
                    {/* <span>About</span> */}
                    <NavLink className="btn btn-success"><FcAbout size={24} /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;