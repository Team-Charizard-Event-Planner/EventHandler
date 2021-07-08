import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const EventBox = () => {
  const handleClaim = () => {
    //redirect to specific event
  };

  return (
    <FormControlLabel
      control={<Checkbox />}
      name="item"
      labelPlacement="end"
      onChange={handleClaim}
    />
  );
};

export default EventBox;
