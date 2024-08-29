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
              <ActionIcon size={90} variant='transparent' component="a" href="https://discord.com/invite/feyyGCA6QU" >
                <IconBrandDiscord size={90} color="white" />
              </ActionIcon>
              <ActionIcon size={90} ml={'lg'} mr={'lg'} variant='transparent' component="a" href="https://www.instagram.com/purdue.arc/">
                <IconBrandInstagram size={90} color="white" />
              </ActionIcon>
              <ActionIcon size={90} variant='transparent' component="a" href="tps://www.linkedin.com/company/purdue-arc/mycompany/">
                <IconBrandLinkedin size={90} color="white" />
              </ActionIcon>
        </Container>
      </div>
    </Container>
        <div className="mx-auto px-4 py-2">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="max-w-5xl lg:max-w-6xl mb-8">
                <video  autoPlay loop muted className="w-full h-auto object-cover rounded-lg shadow-xl" style={{ zIndex: 3, position: 'relative' }} >
                {/* <video loop muted className="w-full h-auto object-cover rounded-lg shadow-xl" style={{ zIndex: 3, position: 'relative' }} > */}
                  <source src={videoSrc} type="video/mp4" />
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
