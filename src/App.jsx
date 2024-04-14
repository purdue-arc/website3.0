// src/App.js
import React from 'react';
import videoSrc from './assets/arcDemo.mp4'; // Path to your video file
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


    return (
        
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<HomePage />} />
                    <Route path="/projects" element={<HomePage/>} />
                    <Route path="/team" element={<HomePage/>} />
                    <Route path="/wiki" element={<HomePage/>} />
                </Routes>
            </BrowserRouter>
    );
}
export default App