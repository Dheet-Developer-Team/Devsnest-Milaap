import React, { useState } from "react";
import Search from './Search';
import TeamNav from './TeamNav';
import "./SCSS/teams.scss";

const Teams = () => {
  const [TeamName, setTeamName] = useState("Dheet Developers");
  return (
    <div className="teams">
      <div className="top">
        <p>{TeamName}</p>
        <Search />
      </div>
    <TeamNav />
    <TeamNav />
    </div>
  );
};

export default Teams;
