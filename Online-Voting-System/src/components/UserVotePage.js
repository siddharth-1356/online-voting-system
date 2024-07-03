import React, { useEffect, useState } from "react";
import VotingCards from "./votingcards";

function UserVotePage(props) {
  const { Id } = props;
  const [isIdPresent, setIsIdPresent] = useState(true);
  const [PartyVotedfor, setPartyVoterfor] = useState("");

  useEffect(() => {
    const dataUrl = "http://localhost:5000/ISVotedRoute/";
    fetch(dataUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        const idPresent = jsonData.some((item) => item.Id === Id);
        const partyVoted = idPresent ? jsonData.find((item) => item.Id === Id).PartyVoted : "";
        setPartyVoterfor(partyVoted);
        setIsIdPresent(idPresent);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, [Id]);
  

  return (
    <div>
      
      {isIdPresent ? (
        <div className="votpageFamily mb-5" style={{opacity:"0.5"}}>
          <h3 className="container mt-4 text-center" style={{fontWeight:"bold"}} >You have already voted for party "{PartyVotedfor}".</h3>
        <h3 className="container mt-4 text-center blink" style={{fontWeight:"bold"}} >Thank You!!!</h3>
        </div>
        

      ) : (
        <div>
            <h1 className="container text-center blink" style={{textDecoration:"underline", opacity:'0.5' , textUnderlineOffset:"8px" ,fontFamily:"var(--font3)"}}>Vote your Leader <i class="fa-solid fa-check-to-slot"></i></h1>
          <VotingCards Id={Id}/>
        </div>
        
      )}
    </div>
  );
}

export default UserVotePage;
