
import React, { useState } from "react";
import "./SCSS/Details.scss";
import Table from "./Table";

const Details = () => {
  const [TeamName, setTeamName] = useState("Dheet Developers");



  return (
    <div>
       <div className="Container" >
        <h1 className="milaap"> <span className="devsnest">Devsnest</span> Milaap</h1>
     


    

      </div>
   


      <div className="details">
        <p className="teamName">{TeamName}</p>
      
        <a className="profile" id="profile" href="#" onClick={(e)=>{
          const profile = document.getElementById("profile");
          const scrum = document.getElementById("scrum");
          profile.classList.add("highlight")
          scrum.classList.remove("highlight")  
          
        } } >
             Profile
          </a>

          <a className="scrum"  id ="scrum" href="#"
           onClick={(e)=>{
            const profile = document.getElementById("profile");
            const scrum = document.getElementById("scrum");
             scrum.classList.add("highlight")
      profile.classList.remove("highlight")
    }}

        
      
      
      >


                  Scrum
          </a>



          <div className="clicked-profile">


          <Table/>


          </div>
    
        
        
      </div>

    </div>
  )
}

export default Details

