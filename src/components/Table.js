import React from 'react';
 const array = [{ name: "Amit", githubLink: "github.com", linkedInLink: "linkedin.com", twitterLink: "twitter.com", },
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
            <div class="box" key={indx}>{ele.name}</div>
          )

        })
      }

    </div>
  )
}

export default Table
