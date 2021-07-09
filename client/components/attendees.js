import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import AddAttendee from "./addAttendee";

const Attendee = () => {
  const dispatch = useDispatch();

  const eventId = useSelector((state) => state.events.eventIndexAndId[1]);
  
  useEffect(() => {
    fetch(`/attendee/${eventId}`)
    .then((res) => {
      // console.log("what is res", res);
      return res.json();
    })
    .then((data) => {
      // console.log("what is data", data);
      dispatch({ type: "GET_ATTENDEES", payload: data.attendees });
    })
    .catch((err) => console.log("error in getting attendees", err));
  }, []);
  
  const handleDelete = (e) => {
    e.preventDefault();
    const removeAttendeeId = e.target.parentElement.id;
    console.log('id',e.target.parentElement.id)

    // don't think i need this is needed since this is dispatched to state
    // const removeAtten = document.getElementById(removeAttendeeId);
    // console.log('remove it', removeAtten);
    dispatch({ type: "DELETE_ATTENDEE", payload: removeAttendeeId });
    fetch("/attendee/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: removeAttendeeId,
        event_id: eventId,
      })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('remove attendee error', err));
  };
  const attendeeList = useSelector((state) => state.events.attendeeArray);
  // console.log("attendeelist", attendeeList);
  const attendees = []
  for (let i = 0; i < attendeeList.length; i++) {
    attendees.push(<ul id={attendeeList[i].user_id} key={`attendee${i}`} className="item">
    {attendeeList[i].username}{" "}
    <Button variant="contained" color="secondary" id={attendeeList[i].user_id} onClick={handleDelete}>
      x
    </Button>
  </ul>)
  }
  
  console.log("attendees array", attendeeList);


  return (
    <div>
      <h3>Attendees</h3>
      <ul className="attendee">{attendees}</ul>
      <AddAttendee />
    </div>
  );
};

export default Attendee;
