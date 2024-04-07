// src/App.js
import React from 'react';
import VideoBackground from './components/VideoBackground';
import videoSrc from './assets/arcDemo.mp4'; // Path to your video file
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {


    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.content-section', {
        scrollTrigger: '.content-section', // start the animation when ".content-section" enters the viewport
        y: 100,
        opacity: 0,
        duration: 1
    });

    return (
        <div className="relative">
            <VideoBackground src={videoSrc} />
        </div>
    );
}
export default App