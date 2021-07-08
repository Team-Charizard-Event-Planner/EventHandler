import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Attendee = () => {
  const dispatch = useDispatch();
  const attendeeList = useSelector((state) => state.events.atendeeArray);
  // const attendees =

  const handleDelete = () => {};
  return (
    <div>
      <ul className="attendee">
        {/* {attendees} */}
        <button className="removeAttendee" onClick={handleDelete}>
          x
        </button>
      </ul>
    </div>
  );
};

export default Attendee;
