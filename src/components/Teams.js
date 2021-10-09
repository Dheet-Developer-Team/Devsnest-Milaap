import React, { useState } from "react";
import Search from './Search';
import "./SCSS/teams.scss";

const Teams = () => {
  const [TeamName, setTeamName] = useState("Dheet Developers");
  return (
    <div className="teams">
      <div className="top">
        <p>{TeamName}</p>
        <Search />
      </div>
      <div className="teamnav">
        <p>{TeamName}</p>
        <p>Enter</p>
      </div>
    </div>
  );
};

export default Teams;
