import React from 'react';
import Teamsdetails from './teamsdetails';
 const array = [{ name: "Amit", githubLink: "https:\\www.github.com", linkedInLink: "linkedin.com", twitterLink: "twitter.com", },
 { name: "Aalok", githubLink: "github.com", linkedInLink: "linkedin.com", twitterLink: "twitter.com", }, 
 { name: "Sharique", githubLink: "github.com", linkedInLink: "linkedin.com", twitterLink: "twitter.com", },
  { name: "Abhay", githubLink: "github.com", linkedInLink: "linkedin.com", twitterLink: "twitter.com", }, 
  { name: "Gauti", githubLink: "github.com", linkedInLink: "linkedin.com", twitterLink: "twitter.com", },
   { name: "Kamal", githubLink: "github.com", linkedInLink: "linkedin.com", twitterLink: "twitter.com", },];
const Table = () => {
  return (
    <div>
      {
        array.map((ele, indx) => {

          return (
            <div class="box" key={indx}>
      
              <Teamsdetails name={ele.name} githubLink={ele.githubLink}  linkedInLink={ele.linkedInLink}  twitterLink={ele.linkedInLink} />

            </div>
          )

        })
      }

    </div>
  )
}

export default Table
