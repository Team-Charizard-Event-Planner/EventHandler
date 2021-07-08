import React from "react";
import EventHeader from "../headers/eventHeader";
import EventBoxDisplay from "./eventBoxDisplay";

const EventContainer = () => {
  return (
    <div>
      <EventHeader heading="Your Events" />
      <EventBoxDisplay />
    </div>
  );
};

export default EventContainer;
