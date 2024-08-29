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

import { Avatar, Text, Button, Paper, Grid, ActionIcon, Box } from '@mantine/core';
function aboutTeam() {
  const memberData = [
    {
      name: "Revanth Senthilkumaran",
      role: "ARC President",
      image: Revanth,
      personalLink: "https://www.linkedin.com/in/revanth-senthilkumaran/",
      email: "revo@gmail.com"
    },
    {
      name: "Mouli Sangita",
      role: "ARC Vice President",
      image: Mouli,
      personalLink: "https://www.linkedin.com/in/moulisangita/",
      email: "test@gmail.com"
    },
    {
      name: "Tamara Itani",
      role: "ARC Treasurer",
      image: Tamara,
      personalLink: "https://www.linkedin.com/in/tamara-itani-290406214",
      email: "test@gmail.com"
    },
    {
      name: "Aastha Patel",
      role: "RISE Director",
      image: Aastha,
      personalLink: "https://www.linkedin.com/in/-aastha-patel",
      email: "test@gmail.com"
    },
    {
      name: "Nithin Anand",
      role: "Operations Director",
      image: Nithin_Temp,
      personalLink: "https://www.linkedin.com/in/nithin21",
      email: "test@gmail.com"
    },
    {
      name: "Campbell McClendon",
      role: "Project Manager - Rocket League",
      image: Campbell,
      personalLink: "https://linkedin.com/in/campmccl",
      email: "test@gmail.com"
    },
    {
      name: "Elizabeth Kung",
      role: "Project Manager - Astrobotics",
      image: Elizabeth,
      personalLink: "https://www.linkedin.com/in/elizabethkung/",
      email: "test@gmail.com"
    },
    {
      name: "Josh Mansky",
      role: "Project Manager - Drone Delivery",
      image: Josh,
      personalLink: "https://www.linkedin.com/in/joshmansky",
      email: "test@gmail.com"
    },
    {
      name: "Visuwanaath Selvam",
      role: "Project Manager - Piano Hand",
      image: Visuwanaath,
      personalLink: "https://www.linkedin.com/in/visuwaselvam/",
      email: "selvamv@purdue.edu"
    },
    {
      name: "Siddarth Calidas",
      role: "Project Manager - Dog Copter",
      image: Siddarth,
      offset: 0,
      zoom: 100,
      personalLink: "https://www.linkedin.com/in/siddarth-calidas/",
      email: "scalidas@purdue.edu"
    },
    {
      name: "Priyanka Soe",
      role: "Project Manager - Sphero Swarm",
      image: Priyanka,
      offset: 0,
      zoom: 100,
      personalLink: "https://www.linkedin.com/in/priyanka-soe/",
      email: "soep@purdue.edu"
    },

    {
      name: "Edgar Babajanyan",
      role: "Software Engineering Lead",
      image: Edgar_Temp,
      personalLink: "https://www.linkedin.com/in/edgar-babajanyan-a28230217/",
      email: "test@gmail.com"
    },
    {
      name: "Tristan Brideweser",
      role: "Sponsorships and Outreach Lead",
      image: Tristan,
      personalLink: "https://www.linkedin.com/in/edgar-babajanyan-a28230217/",
      email: "test@gmail.com"
    },
    {
      name: "Yashvi Agarval",
      role: "Marketing and Design Lead",
      image: Yashvi,
      offset: 0,
      zoom: 100,
      personalLink: "https://www.linkedin.com/in/yashvi-agrawal/",
      email: "agarw192@purdue.edu"
    },
  ];
  
  return (
    <main style={{ padding: '100px' }}>
    <Text ta="center" fz="h1" fw="bold" mt="md" mb="xl">
      Meet the ARC Board!
    </Text>
    <Grid grow spacing="lg" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
      {memberData.map((member, index) => (
        <Grid.Col span={3}>
        <Paper radius="md" withBorder p="lg" key={index} >
          <Avatar
            src={member.image}
            size={120}
            radius={120}
            mx="auto"
          />
          <Box ta="center">
          <Text fz="lg" fw={500} mt="md">
            {member.name}
          </Text>
          <Text fz="sm" fw={600}>
            {member.role}
          </Text>
          <Text c="dimmed" fz="sm" mb={3}>
            {member.email}
          </Text>
          <ActionIcon onClick={() => window.open(member.personalLink, '_blank')} >
          <IconBrandLinkedin/>
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
