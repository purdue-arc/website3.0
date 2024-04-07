// src/components/VideoBackground.js
import React from 'react';

const VideoBackground = ({ src }) => (
    <div className="align-center justify-center">
        <video autoPlay loop muted className="w-[80%] h-[80%] object-cover">
            <source src={src} type="video/mp4" />
        </video>
    </div>
);

export default VideoBackground;
