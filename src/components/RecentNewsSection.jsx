import React, { useState, useEffect } from 'react';

const RecentNewsSection = ({ news }) => {
    const [images, setImages] = useState({});

    // Preload images
    useEffect(() => {
        news.forEach((item, index) => {
            if (!item.image.startsWith('http')) {
                import(/* @vite-ignore */ `${item.image}`  )
                    .then((image) => {
                        setImages(prev => ({ ...prev, [index]: image.default }));
                    })
                    .catch(error => console.log('Failed to load image:', error));
            }
        });
    }, [news]);

    // Render a single news item
    const renderNewsItem = (item, index) => {
        const imagePath = item.image.startsWith('http') ? item.image : images[index];
        return item.link ? (
            <a href={item.link} key={index} className="rounded overflow-hidden shadow-lg" style={{ textDecoration: 'none' }}>
                <img className="w-full" src={imagePath} alt={item.title} />
                <div className="px-6 py-4">
                    <div className="text-2xl font-bold text-center text-gray-800">{item.title}</div>
                    <p className="text-gray-700 text-base">{item.summary}</p>
                </div>
            </a>
        ) : (
            <div key={index} className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={imagePath} alt={item.title} />
                <div className="px-6 py-4">
                    <div className="text-2xl font-bold text-center text-gray-800">{item.title}</div>
                    <p className="text-gray-700 text-base">{item.summary}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="w-10/12 mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-gray-800">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {news.map(renderNewsItem)}
            </div>
        </div>
    );
};

export default RecentNewsSection;
