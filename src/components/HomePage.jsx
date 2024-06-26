import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecentNewsSection from "./RecentNewsSection.jsx";
import EventsSection from "./EventsSection.jsx";
import news from "./news.json";
import events from "./events.json";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import videoSrc from '../assets/arcDemo.mp4';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.content-section', {
            scrollTrigger: {
                trigger: '.content-section',
                start: 'top 75%', // Adjust the start point as needed
                end: 'bottom 25%', // Adjust the end point as needed
                toggleActions: 'play none none none'
            },
            y: 100,
            opacity: 0,
            duration: 1
        });
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto px-4 py-2">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">Welcome to ARC!</h1>
                        <p className="mt-4 text-lg text-gray-600 mb-4">
                            We build to understand, create, and innovate. Join us to explore Robotics and Operations.
                        </p>
                        <div className="max-w-4xl lg:max-w-5xl mb-8">
                            <video autoPlay loop muted className="w-full h-auto object-cover rounded-lg shadow-xl">
                                <source src={videoSrc} type="video/mp4"/>
                            </video>
                        </div>
                        {/* <Link to="/about"
                              className="mt-8 inline-block bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition-colors">
                            The Team
                        </Link> */}
                    </div>
                </div>
            </div>
            <RecentNewsSection className=" mx-auto px-4 py-8" news={news}/>
            {/* <EventsSection className="mx-auto px-4 py-8" events={events}/> */}
        </div>
    );
};

export default HomePage;
