import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecentNewsSection from "./RecentNewsSection.jsx";
import EventsSection from "./EventsSection.jsx";
import events from "./events.json";
import videoSrc from '../assets/arcDemo.mp4';
import Discord from "../assets/icons/icons8-discord-128.png"
import Instagram from "../assets/icons/icons8-instagram-128.png"
import Linkedin from "../assets/icons/icons8-linkedin-96.png"
import { Title, Text, Button, Container, ActionIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Dots } from './Dots';
import classes from './HomePage.module.css';
import { IconBrandDiscord } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
const dotXOffset = 20;
const dotYOffset = 20;
const HomePage = () => {
    let showDots = useMediaQuery('(min-width: 56.25em)');
    
    return (
        <>
        {showDots && (<>
        <Dots className={classes.dots} style={{ left: dotXOffset * 0, top: 0*dotYOffset }} />
      <Dots className={classes.dots} style={{ left: 3 * dotXOffset, top: 0*dotYOffset }} />
      <Dots className={classes.dots} style={{ left: 0 * dotXOffset, top: 7 * dotYOffset }} />
      <Dots className={classes.dots} style={{ right: 0 * dotXOffset, top: 3 * dotYOffset }} />
      <Dots className={classes.dots} style={{ right: 4 * dotXOffset, top: 14 * dotYOffset }} />
        <Dots className={classes.dots} style={{ left: dotXOffset * 0, top: 18*dotYOffset }} />
      <Dots className={classes.dots} style={{ left: 3 * dotXOffset, top: 20*dotYOffset }} />
      <Dots className={classes.dots} style={{ left: 12 * dotXOffset, top: 32 * dotYOffset }} />
      <Dots className={classes.dots} style={{ right: 0 * dotXOffset, top: 28 * dotYOffset }} />
      <Dots className={classes.dots} style={{ right: 8 * dotXOffset, top: 80 * dotYOffset }} />
      </>)
      }
    <Container className={classes.wrapper} size={'100%'}>


      <div className={classes.inner}>
        <Title className={classes.title}>
          We{' '}
          <Text component="span" c={'blue'} inherit>
            Are 
          </Text>{' '}
          ARC
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          We build to understand, create, and innovate. Join us to explore Robotics and Operations.
          </Text>
        </Container>
        <Container ta={"center"}>
            <ActionIcon size={90} variant='transparent'>
                <IconBrandDiscord size={90} color="white" />
                </ActionIcon>
                <ActionIcon size={90} ml={'lg'} mr={'lg'} variant='transparent'>
                <IconBrandInstagram size={90} color="white" />
                </ActionIcon>
                <ActionIcon size={90} variant='transparent'>
                <IconBrandLinkedin size={90} color="white" />
                </ActionIcon>
        </Container>
      </div>
    </Container>
            <div className="mx-auto px-4 py-2">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                        {/* <h1 className="text-5xl lg:text-6xl font-bold text-white">Welcome to ARC!</h1>
                        <p className="mt-4 text-lg text-white mb-4">
                            We build to understand, create, and innovate. Join us to explore Robotics and Operations.
                        </p>

                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://discord.com/invite/feyyGCA6QU" target="_blank" rel="noopener noreferrer" className="icon-container w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <img src={Discord} alt="Icon 1" className="w-8 h-8"/>
                            </a>
                            <a href="https://www.instagram.com/purdue.arc/" target="_blank" rel="noopener noreferrer" className="icon-container w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <img src={Instagram} alt="Icon 2" className="w-8 h-8"/>
                            </a>
                            <a href="https://www.linkedin.com/company/purdue-arc/mycompany/" target="_blank" rel="noopener noreferrer" className="icon-container w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <img src={Linkedin} alt="Icon 3" className="w-8 h-8"/>
                            </a>
                        </div> */}
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                        <div className="max-w-5xl lg:max-w-6xl mb-8">
                            {/* <video  autoPlay loop muted className="w-full h-auto object-cover rounded-lg shadow-xl" style={{ zIndex: 3, position: 'relative' }} > */}
                            <video loop muted className="w-full h-auto object-cover rounded-lg shadow-xl" style={{ zIndex: 3, position: 'relative' }} >
                                <source src={videoSrc} type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                </div>
            </div>
            <RecentNewsSection />
        </>
    );
};

export default HomePage;
