// src/App.js
import React from 'react';
import videoSrc from './assets/arcDemo.mp4'; // Path to your video file
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {


    return (
        <div className="bg-gray-50 min-h-screen" >
            <Navbar/>
            <HomePage src={videoSrc} />
        </div>
    );
}
export default App