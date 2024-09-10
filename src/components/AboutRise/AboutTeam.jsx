import React from "react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Revanth from "../../assets/AboutRise_Assets/revanth.png";
import Vijay from "../../assets/AboutRise_Assets/Vijay.jpg";
import Mouli from "../../assets/AboutRise_Assets/Mouli.jpg";
import Edgar_Temp from "../../assets/AboutRise_Assets/Edgar_Temp.jpeg";
import Nithin_Temp from "../../assets/AboutRise_Assets/Nithin_Temp.jpeg";
import Aastha from '../../assets/AboutRise_Assets/aastha.jpg';
import Elizabeth from '../../assets/AboutRise_Assets/elizabeth.png';
import Josh from '../../assets/AboutRise_Assets/josh.png';
import Tamara from '../../assets/AboutRise_Assets/tamara.png';
import Tristan from '../../assets/AboutRise_Assets/tristan.png';
import Visuwanaath from '../../assets/AboutRise_Assets/Visuwanaath.png';
import Campbell from '../../assets/AboutRise_Assets/campbell.png';
import Ryan from '../../assets/AboutRise_Assets/ryan.png';
import Yashvi from '../../assets/AboutRise_Assets/Yashvi.jpeg';
import Siddarth from '../../assets/AboutRise_Assets/Siddarth.jpg';
import Priyanka from '../../assets/AboutRise_Assets/Priyanka.jpg';
import Archis from '../../assets/AboutRise_Assets/archis.jpg';

import { Avatar, Text, Button, Paper, Grid, ActionIcon, Box } from '@mantine/core';
function aboutTeam() {
  const memberData = [
    {
      name: "Revanth Senthil",
      role: "ARC President",
      image: Revanth,
      personalLink: "https://www.linkedin.com/in/revanth-senthilkumaran/",
      email: "senthilr@purdue.edu"
    },
    {
      name: "Mouli Sangita",
      role: "ARC Vice President",
      image: Mouli,
      personalLink: "https://www.linkedin.com/in/moulisangita/",
      email: "msangita@purdue.edu"
    },
    {
      name: "Tamara Itani",
      role: "ARC Treasurer",
      image: Tamara,
      personalLink: "https://www.linkedin.com/in/tamara-itani-290406214",
      email: "titani@purdue.edu"
    },
    {
      name: "Aastha Patel",
      role: "RISE Director",
      image: Aastha,
      personalLink: "https://www.linkedin.com/in/-aastha-patel",
      email: "pate1695@purdue.edu"
    },
    {
      name: "Nithin Anand",
      role: "Operations Director",
      image: Nithin_Temp,
      personalLink: "https://www.linkedin.com/in/nithin21",
      email: "anand118@purdue.edu"
    },
    {
      name: "Campbell McClendon",
      role: "Project Lead - Rocket League",
      image: Campbell,
      personalLink: "https://linkedin.com/in/campmccl",
      email: "mcclendj@purdue.edu"
    },
    {
      name: "Elizabeth Kung",
      role: "Project Lead - Astrobotics",
      image: Elizabeth,
      personalLink: "https://www.linkedin.com/in/elizabethkung/",
      email: "kunge@purdue.edu"
    },
    {
      name: "Josh Mansky",
      role: "Project Lead - Drone Delivery",
      image: Josh,
      personalLink: "https://www.linkedin.com/in/joshmansky",
      email: "jmansky@purdue.edu"
    },
    {
      name: "Visuwanaath Selvam",
      role: "Project Lead - Piano Hand",
      image: Visuwanaath,
      personalLink: "https://www.linkedin.com/in/visuwaselvam/",
      email: "selvamv@purdue.edu"
    },
    {
      name: "Siddarth Calidas",
      role: "Project Lead - Dog Copter",
      image: Siddarth,
      personalLink: "https://www.linkedin.com/in/siddarth-calidas/",
      email: "scalidas@purdue.edu"
    },
    {
      name: "Priyanka Soe",
      role: "Project Lead - Sphero Swarm",
      image: Priyanka,
      personalLink: "https://www.linkedin.com/in/priyanka-soe/",
      email: "soep@purdue.edu"
    },

    {
      name: "Edgar Babajanyan",
      role: "Development Lead",
      image: Edgar_Temp,
      personalLink: "https://www.linkedin.com/in/edgar-babajanyan-a28230217/",
      email: "ebabajan@purdue.edu"
    },
    {
      name: "Tristan Brideweser",
      role: "Sponsorships and Outreach Lead",
      image: Tristan,
      personalLink: "https://www.linkedin.com/in/edgar-babajanyan-a28230217/",
      email: "tbridewe@purdue.edu"
    },
    {
      name: "Yashvi Agarval",
      role: "Marketing and Design Lead",
      image: Yashvi,
      personalLink: "https://www.linkedin.com/in/yashvi-agrawal/",
      email: "agarw192@purdue.edu"
    },
    {
      name: "Archis Behere",
      role: "Shop Manager",
      image: Archis,
      personalLink: "https://www.linkedin.com/in/asbehere",
      email: "asbehere@purdue.edu"
    },
  ];

  return (
    <main style={{ padding: '100px' }}>
      <Text ta="center" c='white' fz="120" fw="bold" mt="md" mb="xl">
        Meet the ARC Board!
      </Text>
      <Grid grow spacing="lg" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {memberData.map((member, index) => (
          <Grid.Col span={3} key={index}>
            <Paper radius="md" withBorder p="lg" bg='dark' >
              <Avatar
                src={member.image}
                // size={300}
                radius={9999}
                mx="auto"
                style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
              />
              <Box ta="center">
                <Text fz="h1" fw={500} mt="md">
                  {member.name}
                </Text>
                <Text fz="h2" fw={600}>
                  {member.role}
                </Text>
                <Text c="dimmed" fz="h3" mb={3}>
                  {member.email}
                </Text>
                <ActionIcon size={'xl'} onClick={() => window.open(member.personalLink, '_blank')} >
                  <IconBrandLinkedin size={'80'}/>
                </ActionIcon>
              </Box>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </main>
  );
}

export default aboutTeam;
