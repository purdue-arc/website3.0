import React from 'react';
import LandingPage from './Projects'; // Import the LandingPage component
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from './Projects';

function App() {

    return (
        <div className="relative">
            <Projects /> {/* Use the LandingPage component */}
        </div>
    );
}

export default App;
