import React, { useState} from 'react'
import "./SCSS/teamnav.scss"

const TeamNav = () => {
  const [TeamName, setTeamName] = useState("Dheet Developers");
  return (
    <div className="teamnav">
      <p>{TeamName}</p>
      <p>Enter</p>
    </div>
  );
}

export default TeamNav
