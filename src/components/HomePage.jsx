import React, { useEffect } from 'react';
import RecentNewsSection from "./RecentNewsSection.jsx";
// import EventsSection from "./EventsSection.jsx";
// import events from "./events.json";
import videoSrc from '../assets/arcDemo.mp4';
import { Title, Text, Container, ActionIcon } from '@mantine/core';
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

        <Dots className={classes.dots} style={{ left: 1 * dotXOffset, top: 1 * dotYOffset }} />
        <Dots className={classes.dots} style={{ left: 3 * dotXOffset, top: 8 * dotYOffset }} />
        <Dots className={classes.dots} style={{ left: 0 * dotXOffset, top: 20 * dotYOffset }} />
        <Dots className={classes.dots} style={{ left: 15 * dotXOffset, top: 18 * dotYOffset }} />
        <Dots className={classes.dots} style={{ left: 3 * dotXOffset, top: 45 * dotYOffset }} />
        <Dots className={classes.dots} style={{ left: 12 * dotXOffset, top: 32 * dotYOffset }} />

        <Dots className={classes.dots} style={{ right: 0 * dotXOffset, top: 28 * dotYOffset }} />
        <Dots className={classes.dots} style={{ right: 8 * dotXOffset, top: 80 * dotYOffset }} />
        <Dots className={classes.dots} style={{ right: 0 * dotXOffset, top: 3 * dotYOffset }} />
        <Dots className={classes.dots} style={{ right: 4 * dotXOffset, top: 14 * dotYOffset }} />
        <Dots className={classes.dots} style={{ right: 18 * dotXOffset, top: 54 * dotYOffset }} />

        
        <Dots className={classes.dots} style={{ left: 18 * dotXOffset, top: 61 * dotYOffset }} />
        <Dots className={classes.dots} style={{ left: 3 * dotXOffset, top: 85 * dotYOffset }} />

      </>)
      }
      <Container className={classes.wrapper} size={'100%'}>
        <div className={classes.inner}>
          <Title fz={150} className={classes.title}>
            We{' '}
            {/* Arc light blue #8CBAEA */}
            <Text component="span" c={'blue'} inherit>
              Are
            </Text>{' '}
            ARC
          </Title>

          <Container p={0} mt='md' mb={'md'} size={700}>
            <Text size="40px" c="dimmed" className={classes.description}>
              We build to understand, create, and innovate. Join us to explore Robotics and Operations.
            </Text>
          </Container>
        <Container ta={"center"}>
              <ActionIcon
                  size={90}
                  variant='transparent'
                  component="a"
                  href="https://discord.com/invite/feyyGCA6QU"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <IconBrandDiscord size={90} color="white" />
              </ActionIcon>

              <ActionIcon
                  size={90}
                  ml={'lg'}
                  mr={'lg'}
                  variant='transparent'
                  component="a"
                  href="https://www.instagram.com/purdue.arc/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <IconBrandInstagram size={90} color="white" />
              </ActionIcon>

              <ActionIcon
                  size={90}
                  variant='transparent'
                  component="a"
                  href="https://www.linkedin.com/company/purdue-arc/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <IconBrandLinkedin size={90} color="white" />
              </ActionIcon>
          </Container>
      </div>
    </Container>
    <Container size='xl' className='mb-8'>
        <video autoPlay loop muted className="w-full h-auto object-cover rounded-lg shadow-xl" style={{ zIndex: 3, position: 'relative' }} >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Container>
          <RecentNewsSection />
        </>
    );
};

export default HomePage;
