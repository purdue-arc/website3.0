import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import arcLogo from '../assets/arcicon.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        <nav className={`bg-white fixed w-full transition-shadow duration-300 ease-in-out ${isScrolled ? 'shadow-lg bg-opacity-90' : 'bg-opacity-100'}`}>
            <div className="container px-6 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-5">
                    <img src={arcLogo} alt="Brand Logo" className={`transition-all duration-300 ease-in-out ${isScrolled ? 'h-10 w-10' : 'h-16 w-16'}`}/>
                    <div className="text-3xl font-bold text-gray-800 hover:text-gray-700">Purdue ARC</div>
                </Link>
                <div className="hidden lg:flex flex-grow justify-end items-center space-x-4">
                    <Link to="/" className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">Home</Link>
                    <Link to="/about" className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">About Us</Link>
                    <Link to="/projects" className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">Projects</Link>
                    <Link to="/team" className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">Team</Link>
                    <Link to="/wiki" className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">Wiki</Link>
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d="M4 5h16a1 1 0 000-2H4a1 1 0 000 2zm0 6h16a1 1 0 000-2H4a1 1 0 000 2zm0 6h16a1 1 0 000-2H4a1 1 0 000 2z"></path>
                    </svg>
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg absolute w-full">
                    <Link to="/" className="block text-gray-800 hover:text-blue-600 px-6 py-2">Home</Link>
                    <Link to="/about" className="block text-gray-800 hover:text-blue-600 px-6 py-2">About Us</Link>
                    <Link to="/projects" className="block text-gray-800 hover:text-blue-600 px-6 py-2">Projects</Link>
                    <Link to="/team" className="block text-gray-800 hover:text-blue-600 px-6 py-2">Team</Link>
                    <Link to="/wiki" className="block text-gray-800 hover:text-blue-600 px-6 py-2">Wiki</Link>
                </div>
            )}
        </nav>
            <div className="bg-white">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                        <img src={arcLogo} alt="Brand Logo" className=" h-10 w-10 opacity-0"/>
                </div>
            </div>
        </>
    );
};

export default Navbar;
