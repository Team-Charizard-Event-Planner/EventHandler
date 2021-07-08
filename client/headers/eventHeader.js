import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const EventHeader = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch({ type: "USER_LOGOUT" });
    history.push("/");
  };
  const handleHome = (e) => {
    e.preventDefault();
    history.push("/events");
  };
  return (
    <div>
      {/* <Button>Home</Button> some link to home page at the top left corner */}
      <Button onClick={handleHome}>Home</Button>
      {/* Planning to make change based on what Container it currently is in */}
      <h3>{props.heading}</h3>
      {/* Move back to login page */}
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  );
};

export default EventHeader;
