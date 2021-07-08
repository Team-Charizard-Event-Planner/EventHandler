import React from "react";
import { Box } from "@material-ui/core";

const EventBox = () => {
  const handleClick = () => {
    //redirect to specific event
  };

  return (
    <Box className="eventBox" onClick={handleClick}>
      <ul id="eventName">Event: </ul>
      <ul id="eventDate">Date: </ul>
    </Box>
  );
};

export default EventBox;
