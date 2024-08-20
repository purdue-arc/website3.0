import React from "react";
import "./Main.css";
import Member from "./Member.jsx";
import Revanth from "../../assets/AboutRise_Assets/revanth.png";
import Vijay from "../../assets/AboutRise_Assets/Vijay.jpg";
import Mouli from "../../assets/AboutRise_Assets/Mouli.jpg";
import Edgar_Temp from "../../assets/AboutRise_Assets/Edgar_Temp.jpeg";
import Peter from "../../assets/AboutRise_Assets/Peter.png";
import Nithin_Temp from "../../assets/AboutRise_Assets/Nithin_Temp.jpeg";
import Aytaj_Temp from "../../assets/AboutRise_Assets/Aytaj_Temp.jpeg";
import Haddy from "../../assets/AboutRise_Assets/Haddy.png";
import Pranesh from '../../assets/AboutRise_Assets/Pranesh.jpg';
import Kevin from '../../assets/AboutRise_Assets/Kevin.jpg';
import Aastha from '../../assets/AboutRise_Assets/aastha.jpg';
import Shannon from '../../assets/AboutRise_Assets/Shannon.jpeg';

import Elizabeth from '../../assets/AboutRise_Assets/elizabeth.png';
import Josh from '../../assets/AboutRise_Assets/josh.png';
import Tamara from '../../assets/AboutRise_Assets/tamara.png';
import Tristan from '../../assets/AboutRise_Assets/tristan.png';
import Visuwanaath from '../../assets/AboutRise_Assets/Visuwanaath.png';
import Campbell from '../../assets/AboutRise_Assets/campbell.png';
import Ryan from '../../assets/AboutRise_Assets/ryan.png';

function aboutTeam() {
  let members = [];
  const memberData = [
    {
      name: "Revanth Senthilkumaran",
      role: "ARC President",
      image: Revanth,
      offset: 0,
      zoom: 150,
      personalLink: "https://www.linkedin.com/in/revanth-senthilkumaran/",
    },
    {
      name: "Mouli Sangita",
      role: "ARC Vice President",
      image: Mouli,
      offset: 20,
      zoom: 190,
      personalLink: "https://www.linkedin.com/in/moulisangita/",
    },
    {
      name: "Tamara Itani",
      role: "ARC Treasurer",
      image: Tamara,
      offset: 12,
      zoom: 150,
      personalLink: "https://www.linkedin.com/in/tamara-itani-290406214",
    },
    {
      name: "Aastha Patel",
      role: "RISE Director",
      image: Aastha,
      offset: 3,
      zoom: 115,
      personalLink: "https://www.linkedin.com/in/-aastha-patel",
    },
    {
      name: "Nithin Anand",
      role: "Operations Director",
      image: Nithin_Temp,
      offset: -7,
      zoom: 140,
      personalLink: "https://www.linkedin.com/in/nithin21",
    },

    {
      name: "Edgar Babajanyan",
      role: "Software Engineering Lead",
      image: Edgar_Temp,
      offset: 2,
      zoom: 120,
      personalLink: "https://www.linkedin.com/in/edgar-babajanyan-a28230217/",
    },
    {
      name: "Tristan Brideweser",
      role: "Sponsorships and Outreach Lead",
      image: Tristan,
      offset: 2,
      zoom: 140,
      personalLink: "https://www.linkedin.com/in/edgar-babajanyan-a28230217/",
    },
    {
      name: "Ryan Ting",
      role: "Project Manager - Dogcopter",
      image: Ryan,
      offset: 0,
      zoom: 100,
      personalLink: "https://www.linkedin.com/in/ryan-t-ting/",
    },
    {
      name: "Campbell McClendon",
      role: "Project Manager - Rocket League",
      image: Campbell,
      offset: 15,
      zoom: 160,
      personalLink: "https://linkedin.com/in/campmccl",
    },
    {
      name: "Elizabeth Kung",
      role: "Project Manager - Astrobotics",
      image: Elizabeth,
      offset: 0,
      zoom: 100,
      personalLink: "https://www.linkedin.com/in/elizabethkung/",
    },
    {
      name: "Josh Mansky",
      role: "Project Manager - Drone Delivery",
      image: Josh,
      offset: 0,
      zoom: 100,
      personalLink: "https://www.linkedin.com/in/joshmansky",
    },
    {
      name: "Visuwanaath Selvam",
      role: "Project Manager - Piano Hand",
      image: Visuwanaath,
      offset: 0,
      zoom: 100,
      personalLink: "https://www.linkedin.com/in/visuwaselvam/",
    },
  ];

  {/*

  {
      name: "Peter Kurto",
      role: "Software Engineer",
      image: Peter,
      offset: 5,
      zoom: 135,
      personalLink: "https://www.linkedin.com/in/peter-kurto-870660250/",
    },
    {
      name: "Pranesh Monda",
      role: "Software Engineer",
      image: Pranesh,
      offset: 5,
      zoom: 180,
      personalLink: "https://www.linkedin.com/in/pranesh-monda/",
    },
    {
      name: "Kevin Huang",
      role: "Software Engineer",
      image: Kevin,
      offset: 0,
      zoom: 150,
      personalLink: "https://www.linkedin.com/in/kevin-t-huang/",
    },
    {
      name: "Shannon Cheng",
      role: "Software Engineer",
      image: Shannon,
      offset: 0,
      zoom: 100,
      personalLink: "https://www.linkedin.com/in/shannon-cheng-527608204/",
    },

  */}

  for (let i = 0; i < memberData.length; i++) {
    members.push(
        <div className="team-member" key={i}>
          <Member
              name={memberData[i].name}
              role={memberData[i].role}
              img={memberData[i].image}
              offset={memberData[i].offset}
              zoom={memberData[i].zoom}
              link={memberData[i].personalLink}
          />
        </div>
    );
  }

  return (
      <>
        <main className="landing-main">
          <div className="content-container">
            <h1 className="title">About the ARC Team!</h1>
            <div className="team-container">{members}</div>
          </div>
        </main>
      </>
  );
}

export default aboutTeam;
