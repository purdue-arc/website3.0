import React from 'react';
import { Link } from 'react-router-dom';
import arcLogo from '../assets/arcicon.png';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg relative">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-5">
                    <img src={arcLogo} alt="Brand Logo" className="h-10 w-10"/>
                    <Link to="/" className="text-3xl font-bold text-gray-800 hover:text-gray-700">Purdue ARC</Link>
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <Link to="/"
                          className="navbar-item text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
                        Home
                    </Link>
                    <Link to="/about"
                          className="navbar-item text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
                        About Us
                    </Link>
                    <Link to="/projects"
                          className="navbar-item text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
                        Projects
                    </Link>
                    <Link to="/team"
                          className="navbar-item text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
                        Team
                    </Link>
                    <Link to="/wiki"
                          className="navbar-item text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
                        Wiki
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button type="button"
                            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                            <path
                                d="M4 5h16a1 1 0 000-2H4a1 1 0 000 2zm0 6h16a1 1 0 000-2H4a1 1 0 000 2zm0 6h16a1 1 0 000-2H4a1 1 0 000 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
