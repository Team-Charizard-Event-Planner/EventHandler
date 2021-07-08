import React from "react";
import { Box } from "@material-ui/core";

const EventDetails = () => {
  const handleClick = () => {
    //redirect to specific event
  };

  // const [isDisabled, setDisabled] = useState(false)
  // can used disabled attribute to disable editing
  // potentially conditional rendering using turnaries


  return (
    <Box className="eventDetails" onClick={handleClick}>
      <ul id="detailsName">Event: </ul>
      <ul id="detailsDescription">Description: </ul>
      <ul id="detailsDate">Date: </ul>
    </Box>
  );
};

export default EventDetails;
