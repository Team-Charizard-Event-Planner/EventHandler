import React from "react";
import EventHeader from "../headers/eventHeader";
import CurrentEventDisplay from "./CurrentEventDisplay";

const EventViewContainer = () => {
  return (
    <div>
      <EventHeader heading="Event View" />
      <CurrentEventDisplay />
    </div>
  );
};

export default EventViewContainer;
