import React, { useState, useEffect } from 'react';

const EventsSection = ({ events }) => {
    const [images, setImages] = useState({});

    // Preload images
    useEffect(() => {
        events.forEach((event, index) => {
            if (!event.image.startsWith('http')) {
                import(/* @vite-ignore */ `${event.image}`)
                    .then((image) => {
                        setImages(prev => ({ ...prev, [index]: image.default }));
                    })
                    .catch(error => console.log('Failed to load image:', error));
            }
        });
    }, [events]);

    // Render a single event item
    const renderEventItem = (event, index) => {
        const imagePath = event.image.startsWith('http') ? event.image : images[index];
        return (
            <div key={index} className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={imagePath} alt={event.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{event.name}</div>
                    <p className="text-gray-700 text-base">{event.description}</p>
                    <p className="text-gray-600 text-sm">Date: {event.date}</p>
                    <p className="text-gray-600 text-sm">Location: {event.location}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="w-10/12 mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-gray-800">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {events.map(renderEventItem)}
            </div>
        </div>
    );
};

export default EventsSection;
