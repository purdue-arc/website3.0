import React from "react";
import "./Main.css";
import Member from "./Member.jsx";
import Revanth from "../../assets/AboutRise_Assets/Revanth.jpg";
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
function aboutTeam() {
  let members = [];
  const memberData = [
    {
      name: "Haddy Alchaer",
      role: "ARC President",
      image: Haddy,
      offset: 0,
      zoom: 105,
      personalLink: "https://linkedin.com",
    },
    {
      name: "Revanth",
      role: "ARC Vice President",
      image: Revanth,
      offset: 12,
      zoom: 170,
      personalLink: "https://www.linkedin.com/in/revanth-senthilkumaran/",
    },
    {
      name: "Mouli Sangita",
      role: "ARC Operations Chair",
      image: Mouli,
      offset: 20,
      zoom: 190,
      personalLink: "https://www.linkedin.com/in/moulisangita/",
    },
    {
      name: "Aytaj Aslanli",
      role: "ARC Treasurer",
      image: Aytaj_Temp,
      offset: 10,
      zoom: 150,
      personalLink: "https://www.linkedin.com/in/aytajaslanli/",
    },
    {
      name: "Vijay Muthukumar",
      role: "RISE Director",
      image: Vijay,
      offset: 22,
      zoom: 200,
      personalLink: "https://www.linkedin.com/in/vijay-muthukumar/",
    },
    {
      name: "Aastha Patel",
      role: "Logistics & Outreach",
      image: Aastha,
      offset: 3,
      zoom: 115,
      personalLink: "https://www.linkedin.com/in/nithin-anand-na2004/",
    },
    {
      name: "Nithin Anand",
      role: "Lead Events Coordinator",
      image: Nithin_Temp,
      offset: -7,
      zoom: 140,
      personalLink: "https://www.linkedin.com/in/nithin-anand-na2004/",
    },
    {
      name: "Edgar Babajanyan",
      role: "Lead Software Engineer",
      image: Edgar_Temp,
      offset: 2,
      zoom: 120,
      personalLink: "https://www.linkedin.com/in/edgar-babajanyan-a28230217/",
    },
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
  ];

  for (let i = 0; i < memberData.length; i++) {
    members.push(
      <div className="team-member">
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
