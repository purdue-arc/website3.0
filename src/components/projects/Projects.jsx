import React, { useState } from 'react';
import './Projects.css';
import placeholder1 from '../../assets/rise.jpg'; // Using placeholder images for now
import placeholder2 from '../../assets/arccon.png';
import placeholder3 from '../../assets/bowling.png'; 

/*
just for documnetation: if we were to add a new project to change it you would need
to change renderDummyItem = () to suit the new one for jsx. Then in css just add the new item
in everywhere. 
*/
function Projects() {

    const projectsData = [
        {
            title: "Drone Delivery",
            description: "Our project focuses on developing an autonomous drone capable of delivering packages, revolutionizing last-mile delivery applications. This drone will have an optimized flight control system to efficiently navigate urban environments, avoid all potential obstacles (like buildings and trees), and plan long-term routes. We are also creating a mobile app that enables users to easily interact with the drone and experience the convenience of drone delivery firsthand.",
            miniDescription: "Revolutionizing last-mile delivery with autonomous drones navigating urban obstacles.",
            images: [placeholder1, placeholder2, placeholder3]  // Import new images and replace these as needed
        },
        {
            title: "Wizard Chess",
            description: "We're creating a large-scale, autonomous chess game inspired by the enchanting Wizard's Chess from Harry Potter. The pieces will consist of individual robots, controlled using Raspberry Pi Picos and wifi chips, that all connect to a central computer that controls all the pieces movements. On the software side, our goal is to bring chess to life by combining voice recognition, path planning, computer vision, and swarm control to develop a unique, interactive player experience.",
            miniDescription: "Bringing Wizard's Chess to life with autonomous robots and interactive gameplay.",
            images: [placeholder1, placeholder2, placeholder3] // Import new images and replace these as needed
        },
        {
            title: "Dog Copter",
            description: "We're building a groundbreaking fusion of a drone and a robotic dog, featuring autonomous navigation and camera/lidar vision. Inspired by innovations in robotic dogs (Boston Dynamics' Spot), flying cars, and drones, our goal is to create a versatile robot capable of seamless transitions, effortlessly traversing rocky land and taking flight in the air, primarily for exploration purposes. Join us as we push the boundaries of robotics to create the marvel that is DogCopter.",
            miniDescription: "Fusing drones and robotic dogs for versatile exploration in air and land.",
            images: [placeholder1, placeholder2, placeholder3] // Import new images and replace these as needed
        },
        {
            title: "CHECK OUT SOME OF OUR PROJECTS",
            description: "n/a",
            miniDescription: "see what our members are up to"
        },
        {
            title: "Piano Hand",
            description: "Inspired by groundbreaking biomechanical robots like Boston Dynamics' Atlas, our project aims to build a fully autonomous, human-like hand capable of playing the piano, achieving the dexterity and complexity of the human hand's 27 degrees of freedom. We are exploring the exciting realm of machine learning and optical image recognition to develop a model that can read sheet music, delving in to different algorithms to make hand motion along the piano as real as possible, and controlling and running all this with controllers channeled by PCBs.",
            miniDescription: "Creating a fully autonomous, human-like hand for piano playing through machine learning.",
            images: [placeholder1, placeholder2, placeholder3] // Import new images and replace these as needed
        },
        {
            title: "Rocket League",
            description: "We are building an autonomous system of small-scale vehicles to play exhilarating, high-speed soccer matches. Inspired by the popular video game Rocket League, our goal is to create a dynamic and interactive demo, pitting human-controlled cars against autonomous ones. As we progress, we envision launching a multi-university competition, inviting teams to showcase their own intelligent strategies in a thrilling autonomous soccer tournament. Be a part of this cutting-edge initiative and help shape the future of autonomous sports!",
            miniDescription: "Pioneering autonomous soccer matches with human versus AI competitions.",
            images: [placeholder1, placeholder2, placeholder3] // Import new images and replace these as needed
        },
        {
            title: "Sphero Swarm",
            description: "Our project revolves around the use of Sphero balls, compact spherical robots capable of precise movement and coordination, to form dynamic representations of molecules. By orchestrating the controlled movement of these Sphero robots, we will bring molecular structures to life, enabling visitors to gain a deeper understanding of chemistry in an engaging and interactive way.",
            miniDescription: "Animating molecular structures with precise movements of compact robots.",
            images: [placeholder1, placeholder2, placeholder3] // Import new images and replace these as needed
        }
    ];

    // State to keep track of expanded items
    const [expandedItem, setExpandedItem] = useState(null);
    const [blurBackground, setBlurBackground] = useState(false);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = (index) => {
      if (currentImageIndex < projectsData[index].images.length - 1) {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const handlePrevImage = () => {
      if (currentImageIndex > 0) {
        setCurrentImageIndex((prevIndex) => prevIndex - 1);
      }
    };

    const toggleExpand = (index) => {
        if (index !== 3) {
            setCurrentImageIndex(0);
            setExpandedItem(expandedItem === index ? null : index);
            setBlurBackground(expandedItem === null ? true : false);
        }
    };

    const renderProjectTitle = (index) => {
        const isExpanded = expandedItem === index;

        if (isExpanded) {
            // Return the expanded item
            return (
                <div className={`item expanded`} onClick={() => toggleExpand(index)}>
                    <p className="project-title-expanded">{projectsData[index].title}</p>
                    <div className="description">{projectsData[index].description}</div>
                    {projectsData[index].images && projectsData[index].images.length > 0 && (
                        <div className="flex flex-col items-center space-y-4 mb-4">
                            <img
                            src={projectsData[index].images[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                            className="rounded-lg w-full object-cover mt-5"
                            />
                            <div className="flex justify-center space-x-4 w-full items-center">
                            <button
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handlePrevImage();
                                }}
                                disabled={currentImageIndex === 0}
                                style={{ backgroundColor: '#01a6e8' }}
                                className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                            </button>
                            <div className="flex space-x-2">
                                {projectsData[index].images.map((image, index) => (
                                <span
                                    key={index}
                                    className={`inline-block rounded-full bg-gray-400 ${
                                    currentImageIndex === index ? "h-3 w-3" : "h-2 w-2"
                                    }`}
                                />
                                ))}
                            </div>
                            <button
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleNextImage(index);
                                }}
                                disabled={currentImageIndex === projectsData[index].images.length - 1}
                                style={{ backgroundColor: '#01a6e8' }}
                                className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                            </button>
                            </div>
                        </div>
                    )}
                </div>
            );
        } else {
            // Return the regular item
            return (
                <div className={`item`} onClick={() => toggleExpand(index)}>
                    <p className="project-title">{projectsData[index].title}</p>
                    <p className="mini-description">{projectsData[index].miniDescription}</p>
                </div>
            );
        }
    };

    const renderDummyItem = () => {
        if (expandedItem !== null) {
            //console.log(expandedItem);
            // Determine the column and row span of the expanded item
            let gridColumn, gridRow;

            // Set column and row spans based on expanded item
            if (expandedItem === 0) {
                gridColumn = '1';
                gridRow = '1 / span 2';
            } else if (expandedItem === 1) {
                gridColumn = '2';
                gridRow = '1';
            } else if (expandedItem === 2) {
                gridColumn = '3 / span 2';
                gridRow = '1';
            } else if (expandedItem === 3) {
                gridColumn = '1';
                gridRow = '3';
            } else if (expandedItem === 4) {
                gridColumn = '4';
                gridRow = '2 / span 2 ';
            } else if (expandedItem === 5) {
                gridColumn = '1';
                gridRow = '3 ';
            } else if (expandedItem === 6) {
                gridColumn = '2 / span 2';
                gridRow = '3';
            }

            // Return the dummy item with dynamic column and row span
            return (
                <div 
                    className="item dummy" 
                    style={{ gridColumn, gridRow }}
                    onClick={() => toggleExpand(expandedItem)}
                ></div>
            );
        }
    };

    return (
        <div className="grid grid-cols-4 grid-rows-3 gap-4 content-center w-[90vw] mx-auto pt-7 pb-3">
            {projectsData.map((_, index) => renderProjectTitle(index))}
            {renderDummyItem()}
        </div>
    );
}

export default Projects;
