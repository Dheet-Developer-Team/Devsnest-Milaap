import React, { useState } from 'react';
import * as Bs from "react-icons/bs";
import "./SCSS/teamnav.scss";

const Teamsdetails = (props) => {
  const [TeamName, setTeamName] = useState("Dheet Developers");
  return (
    <div className="teamnav">
      <span>{props.name}</span>
      <div >
      <a href={props.githubLink} className="git"> <Bs.BsGithub size={30} color="#4f46e5"   /> </a>
      <a href={props.linkedInLink} className="linkedin"> <Bs.BsLinkedin size={30} color="#4f46e5"  /> </a>
      <a href={props.twitterLink}> <Bs.BsTwitter size={30} color="#4f46e5"/> </a>
      </div>

    </div>
  );
}

export default Teamsdetails;
