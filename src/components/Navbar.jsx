// src/components/Navbar.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
    useEffect(() => {
        gsap.from('.navbar-item', { duration: 0.5, opacity: 0, y: -50, stagger: 0.2 });
    }, []);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6">
            <div className="navbar-item">Home</div>
            <div className="navbar-item">About Us</div>
            <div className="navbar-item">Projects</div>
            <div className="navbar-item">Team</div>
            <div className="navbar-item">Wiki</div>
        </nav>
    );
};

export default Navbar;
