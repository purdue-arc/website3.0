import React, { useState, useEffect } from 'react';

// Define the JSON data as a constant variable
const newsData = [
    {
        "title": "RISE 2",
        "summary": "The Robotics and Intelligent Systems Expo (RISE) focuses on pioneering innovations in robotics and autonomy. RISE immerses attendees in robotics and AI, aiming to spark interest among students and faculty through demonstrations, presentations, and networking sessions with industry professionals. The event highlights Purdue University's leadership in these fields and fosters connections among robotics and AI enthusiasts.",
        "image": "/assets/news/rise.jpg",
        "link": "https://rise.purduearc.com/"
    },
    {
        "title": "ARC-con",
        "summary": "ARC-Con is a celebratory event that marks the end of the semester at ARC, highlighting the contributions of members involved in various projects like RISE and astrobotics. The event features an array of activities including free food, snacks, and drinks, a competitive bridge-building contest with prizes, and a showcase of student projects through posters and presentations. It's an opportunity for attendees to engage with project managers, ask questions about involvement, and connect with the ARC community in a festive atmosphere.",
        "image": "/assets/news/arccon.png",
        "link": ""
    },
    {
        "title": "PSP x ARC Bowling Night",
        "summary": "The PSP x ARC Bowling Night is an enjoyable event that combines fun with community bonding. Held at the PMU Rack and Roll, this gathering offers free bowling and pizza, providing a fantastic opportunity for ARC and PSP members to mingle and make new friends. It's part of the E-week festivities, contributing to a week filled with engaging activities designed to enhance intra-club connections.",
        "image": "/assets/news/bowling.png",
        "link": ""
    }
];

const RecentNewsSection = () => {
    const [images, setImages] = useState({});

    // Preload images if needed
    useEffect(() => {
        newsData.forEach((item, index) => {
            if (!item.image.startsWith('http')) {
                setImages(prev => ({ ...prev, [index]: item.image }));
            }
        });
    }, []);

    // Render a single news item
    const renderNewsItem = (item, index) => {
        const imagePath = item.image.startsWith('http') ? item.image : images[index];
        return item.link ? (
            <a href={item.link} key={index} className="rounded overflow-hidden shadow-lg block" style={{ textDecoration: 'none' }}>
                <div className="h-64 overflow-hidden">
                    <img src={imagePath} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-6 py-4">
                    <div className="text-2xl font-bold text-center text-white">{item.title}</div>
                    <p className="text-white text-base">{item.summary}</p>
                </div>
            </a>
        ) : (
            <div key={index} className="rounded overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                    <img src={imagePath} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-6 py-4">
                    <div className="text-2xl font-bold text-center text-white">{item.title}</div>
                    <p className="text-white text-base">{item.summary}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="w-10/12 mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-white">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {newsData.map(renderNewsItem)}
            </div>
        </div>
    );
};

export default RecentNewsSection;
