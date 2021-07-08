import React from "react";
import EventBox from "../components/eventBox";
import { Box } from "@material-ui/core";

const EventBoxDisplay = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // on click, add a new Event to User
    console.log("creating new Event");
  };

  const arrayOfEventBoxes = [];
  /*
  Looping through each Event that is assigned to User
  for (let i = 0; i < someArray.length i++) {
    arrayOfEventBoxes.push( <EventBox key={i} 'add more data to box'/>)
  }
  */

  return (
    <div>
      <Box className="eventBox">
        <button onClick={handleClick}>Create Event +</button>
      </Box>
      {/* Displaying all other Events assigned to User */}
      {arrayOfEventBoxes}
    </div>
  );
};

export default EventBoxDisplay;
