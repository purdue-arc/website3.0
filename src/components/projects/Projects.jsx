import React, { useState } from 'react';
import './Projects.css';
import placeholder1 from '../../../public/assets/news/rise.jpg'; // Using placeholder images for now
import placeholder2 from '../../../public/assets/news/arccon.png';
import placeholder3 from '../../../public/assets/news/bowling.png';
import phand1 from '../../assets/projects/phand1.jpg';
import rleague1 from '../../assets/projects/rleague1.jpg';
import sphere1 from '../../assets/projects/sphere1.jpg';
import sphere2 from '../../assets/projects/sphere2.jpg';
import wches1 from '../../assets/projects/wches1.jpg';
import wches2 from '../../assets/projects/wches2.jpg';
import ddeliver1 from '../../assets/projects/ddeliver1.jpg';

function Projects() {
    const projectsData = [
        {
            title: "Drone Delivery",
            description: "Our project focuses on developing an autonomous drone capable of delivering packages, revolutionizing last-mile delivery applications. This drone will have an optimized flight control system to efficiently navigate urban environments, avoid all potential obstacles (like buildings and trees), and plan long-term routes. We are also creating a mobile app that enables users to easily interact with the drone and experience the convenience of drone delivery firsthand.",
            miniDescription: "Revolutionizing last-mile delivery with autonomous drones navigating urban obstacles.",
            images: [ddeliver1]
        },
        {
            title: "Wizard Chess",
            description: "We're creating a large-scale, autonomous chess game inspired by the enchanting Wizard's Chess from Harry Potter. The pieces will consist of individual robots, controlled using Raspberry Pi Picos and wifi chips, that all connect to a central computer that controls all the pieces movements. On the software side, our goal is to bring chess to life by combining voice recognition, path planning, computer vision, and swarm control to develop a unique, interactive player experience.",
            miniDescription: "Bringing Wizard's Chess to life with autonomous robots and interactive gameplay.",
            images: [wches1, wches2]
        },
        {
            title: "Dog Copter",
            description: "We're building a groundbreaking fusion of a drone and a robotic dog, featuring autonomous navigation and camera/lidar vision. Inspired by innovations in robotic dogs (Boston Dynamics' Spot), flying cars, and drones, our goal is to create a versatile robot capable of seamless transitions, effortlessly traversing rocky land and taking flight in the air, primarily for exploration purposes. Join us as we push the boundaries of robotics to create the marvel that is DogCopter.",
            miniDescription: "Fusing drones and robotic dogs for versatile exploration in air and land.",
            images: [placeholder1]
        },
        {
            title: "Piano Hand",
            description: "Inspired by groundbreaking biomechanical robots like Boston Dynamics' Atlas, our project aims to build a fully autonomous, human-like hand capable of playing the piano, achieving the dexterity and complexity of the human hand's 27 degrees of freedom. We are exploring the exciting realm of machine learning and optical image recognition to develop a model that can read sheet music, delving in to different algorithms to make hand motion along the piano as real as possible, and controlling and running all this with controllers channeled by PCBs.",
            miniDescription: "Creating a fully autonomous, human-like hand for piano playing through machine learning.",
            images: [phand1]
        },
        {
            title: "Rocket League",
            description: "We are building an autonomous system of small-scale vehicles to play exhilarating, high-speed soccer matches. Inspired by the popular video game Rocket League, our goal is to create a dynamic and interactive demo, pitting human-controlled cars against autonomous ones. As we progress, we envision launching a multi-university competition, inviting teams to showcase their own intelligent strategies in a thrilling autonomous soccer tournament. Be a part of this cutting-edge initiative and help shape the future of autonomous sports!",
            miniDescription: "Pioneering autonomous soccer matches with human versus AI competitions.",
            images: [rleague1]
        },
        {
            title: "Sphero Swarm",
            description: "Our project revolves around the use of Sphero balls, compact spherical robots capable of precise movement and coordination, to form dynamic representations of molecules. By orchestrating the controlled movement of these Sphero robots, we will bring molecular structures to life, enabling visitors to gain a deeper understanding of chemistry in an engaging and interactive way.",
            miniDescription: "Animating molecular structures with precise movements of compact robots.",
            images: [sphere1, sphere2]
        }
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const selectProject = (index) => {
        setSelectedProject(projectsData[index]);
    };

    return (
        <div className="projects-container">
            <div className="projects-list">
                <h1 className="title">Projects</h1>
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className={`project-item ${selectedProject === project ? 'selected' : ''}`}
                        onClick={() => selectProject(index)}
                    >
                        <p className="project-title">{project.title}</p>
                        <p className="mini-description">{project.miniDescription}</p>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="project-details">
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>
                    {selectedProject.images && selectedProject.images.length > 0 && (
                        <div className="project-images">
                            {selectedProject.images.map((image, idx) => (
                                <img key={idx} src={image} alt={selectedProject.title} className="project-image" />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Projects;
