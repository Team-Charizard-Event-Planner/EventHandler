import React, { useEffect } from "react";
import EventBox from "../components/eventBox";
import { Box } from "@material-ui/core";
import CreateNewEventPopUp from "../components/createNewEventPopUp";
import { useSelector, useDispatch } from "react-redux";

const EventBoxDisplay = () => {
  const dispatch = useDispatch();
  const eventArray = useSelector((state) => state.events.eventArray);
  const userId = useSelector((state) => state.users.userId);

  useEffect(() => {
    fetch(`/event/userID/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({ type: "GET_EVENTS", payload: data });
      })
      .catch((err) =>
        console.log("error in getting events in EventBoxDisplay", err)
      );
  }, []);

  const arrayOfEventBoxes = [];

  // Looping through each Event that is assigned to User
  for (let i = 0; i < eventArray.length; i++) {
    const curEvent = eventArray[i];
    arrayOfEventBoxes.push(
      <EventBox
        curIndex={i}
        key={curEvent._id}
        curId={curEvent._id}
        title={curEvent.title}
        date={curEvent.date}
        description={curEvent.description}
      />
    );
  }

  return (
    <div className="box-display">
      <CreateNewEventPopUp />
      {arrayOfEventBoxes}
    </div>
  );
};

export default EventBoxDisplay;
