import React from 'react';
import Projects from './Projects';
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutRise from "./components/AboutRise/AboutRise.jsx";

function App() {


    return (
        
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutRise />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/team" element={<HomePage/>} />
                    <Route path="/wiki" element={<HomePage/>} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
