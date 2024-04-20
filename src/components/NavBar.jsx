import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { AuthContext } from "../providers/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";

const NavBar = ({ toggleTheme }) => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error(error);
            });
    }

    const [showDashboardDropdown, setShowDashboardDropdown] = useState(false);

    const toggleDashboardDropdown = () => {
        setShowDashboardDropdown(!showDashboardDropdown);
    };

    useEffect(() => {
        // Close the dashboard dropdown when the user logs out
        setShowDashboardDropdown(false);
    }, [user]);
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>



            {user ?
                <>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="/service">Services</NavLink>
                    </li>

                </>
                :
                <>

                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>

                </>

            }
        </>
    );
    return (
        <div className="sticky inset-0 z-10  dark:text-sky-500 block h-max w-full max-w-full rounded-none  bg-opacity-40 px-4 border-b-2 border-sky-800 shadow-md backdrop-blur-2xl backdrop-saturate-200 md:px-8 ">
            <div className="navbar p-1 ">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost  hover:bg-cyan-900 hover:text-white   lg:hidden">
                            <AiOutlineMenu className="w-3 h-4"></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-900 text-white rounded w-32">
                            {navLinks}
                        </ul>
                    </div>
                    <div className=" hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 gap-6">
                            {navLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center ">
                    <Link to="/" className="flex mr-4   items-center normal-case  font-serif font-extrabold text-4xl lg:text-4xl ">
                        <img className="w-12 h-12 md:w-14 md:h-14  mx-auto" src={Logo} alt="" />
                        <h1 className="text-2xl md:text-3xl mx-2"> <span className="text-4xl md:text-5xl text-red-500">N</span>EST</h1>
                    </Link>

                </div>

                <div className="navbar-end">
                    <div className="flex flex-row items-center justify-center ">

                        {
                            user?.email ?

                                <div className="dropdown dropdown-end ml-1">
                                    <label tabIndex={0} className=" bg-cyan-900">
                                        <div className="w-8  ">
                                            <img src={user.photoURL} className="w-8 h-8 rounded-full" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded w-32  bg-sky-800 bg-opacity-80 text-white">
                                        <li>
                                            <a className="justify-between hover:bg-cyan-900 hover:text-white  focus:text-white " href="/profile">
                                                {user.displayName}
                                            </a>
                                        </li>
                                        <div className="dropdown dropdown-bottom">
                                            <label
                                                tabIndex={0}
                                                className=' ml-3'
                                                onClick={toggleDashboardDropdown}
                                            >
                                                Dashboard
                                            </label>
                                            {showDashboardDropdown && (
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content z-[3] menu shadow rounded w-40 bg-sky-800 bg-opacity-80 text-white"
                                                >
                                                    
                                                    <NavLink
                                                        to="/addservice"
                                                        className="px-4 py-1 hover:bg-base-300 rounded-lg"
                                                    >
                                                        Add a Service
                                                    </NavLink>
                                                    <NavLink
                                                        to="/manageservices"
                                                        className="px-4 py-1 hover:bg-base-300 rounded-lg"
                                                    >
                                                        My Services
                                                    </NavLink>
                                                    <NavLink
                                                        to="/bookings"
                                                        className="px-4 py-1 hover:bg-base-300 rounded-lg"
                                                    >
                                                        My Sechedules
                                                    </NavLink>
                                                    <NavLink
                                                        to="/pending"
                                                        className="px-4 py-1 hover:bg-base-300 rounded-lg"
                                                    >
                                                        My Pendings
                                                    </NavLink>
                                                </ul>
                                            )}
                                        </div>
                                        <li ><a onClick={handleLogOut} className="hover:bg-cyan-900 hover:text-white  focus:text-white" >Logout</a></li>
                                    </ul>
                                </div>

                                :
                                <Link to="/login" className="btn btn-ghost hover:bg-cyan-900 hover:text-white  focus:text-white">Login</Link>

                        }
                        <label className="swap swap-rotate pl-2">

                            <input type="checkbox" onChange={toggleTheme} />

                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>

                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default NavBar;