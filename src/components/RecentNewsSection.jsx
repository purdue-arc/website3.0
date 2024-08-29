import React, { useState, useEffect } from 'react';
import { Card, Image, Text, Button, Container, Grid } from '@mantine/core';
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
        return(
        <Grid.Col key={index} span={3} style={{ zIndex: 3, position: 'relative' }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image src={imagePath} height={64} alt={item.title} />
                </Card.Section>

                <Text align="center" weight={700} size="lg" mt="md">
                    {item.title}
                </Text>

                <Text size="md" c="dimmed" mt="xs">
                    {item.summary}
                </Text>

                {item.link && (
                    <Button
                        component="a"
                        href={item.link}
                        target="_blank"
                        fullWidth
                        mt="md"
                        radius="md"
                    >
                        Learn More
                    </Button>
                )}
            </Card>
        </Grid.Col>
        )
    };

    return (
        <Container size="xl" px="md" py="xl">
            <Text ta={"center"} fz={"h1"} mt="md" c={"white"} fw={"bold"}>
                Latest News
            </Text>
            <Grid grow gutter="md">
                {newsData.map(renderNewsItem)}
            </Grid>
        </Container>
    );
};

export default RecentNewsSection;
