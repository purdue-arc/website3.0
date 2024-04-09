// src/App.js
import React from 'react';
import videoSrc from './assets/arcDemo.mp4'; // Path to your video file
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {


    return (
        <div className="bg-gray-50 min-h-screen w-[100vw]" >
            <Navbar/>
            <HomePage/>
        </div>
    );
}
export default App