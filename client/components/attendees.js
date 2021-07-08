import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";

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
      dispatch({ type: "GET_ATTENDEES", payload: data });
    })
    .catch((err) => console.log("error in getting attendees", err));
  }, []);
  
  const attendeeList = useSelector((state) => state.events.attendeeArray);
  console.log("attendeelist", attendeeList);
  const attendees = []
  for (let i = 0; i < attendeeList.length; i++) {
    attendees.push(<ul id={attendeeList[i]._id} className="item">
    {attendeeList[i].first_name}{" "}
    <Button variant="contained" color="secondary" onClick={handleDelete}>
      x
    </Button>
  </ul>)
  }
  
  console.log("attendees array", attendees);

  const handleDelete = (e) => {
    e.preventDefault();
    const removeAttendeeId = e.target.id;
    // don't think i need this is needed since this is dispatched to state
    document.getElementById(removeAttendeeId).remove();
    dispatch({ type: "DELETE_ATTENDEE", payload: removeAttendeeId });
    fetch("/attendee/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        removeAttendeeId,
      }).then((res) => res.json()),
    }).catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Attendees</h3>
      <ul className="attendee">{attendees}</ul>
    </div>
  );
};

export default Attendee;
