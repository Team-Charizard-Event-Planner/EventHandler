import React from "react";
import { Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const EventBox = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (e) => {
    console.log(props.curId);
    dispatch({ type: "EVENT_INDEX_ID", payload: [props.curIndex, props.curId] });
    history.push(`/eventdetails/${props.curId}`)
  };

  return (
    <Box className="eventBox" onClick={handleClick} id={props.curId}>
      <ul id="eventName">Event: {props.title}</ul>
      <ul id="eventDate">Date: {props.date}</ul>
      <ul id="description">Description: {props.description}</ul>
    </Box>
  );
};

export default EventBox;
