import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@material-ui/core";

const EventDetails = (props) => {
  // bring in props from current event display
  // const eventId = useSelector((state) => state.events.eventIndexAndId[1]);
  const eventIdx = useSelector((state) => state.events.eventIndexAndId[0]);
  const curEvent = useSelector((state) => state.events.eventArray[eventIdx]);

  const handleEdit = () => {
    //redirect to specific event
    alert("edits currently do not work");
  };

  // const [isDisabled, setDisabled] = useState(false)
  // can used disabled attribute to disable editing
  // potentially conditional rendering using turnaries

  return (
    <Box className="eventDetails" onClick={handleEdit}>
      <h3>Event Details</h3>
      <ul id="detailsName">Event: {curEvent.title} </ul>
      <ul id="detailsDescription">Description: {curEvent.description}</ul>
      <ul id="detailsDate">Date: {curEvent.date} </ul>
    </Box>
  );
};

export default EventDetails;
