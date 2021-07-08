import React from 'react';
import { Button } from "@material-ui/core"

const EventHeader = (props) => {
  
  return (
    <div>
      {/* <Button>Home</Button> some link to home page at the top left corner */}
      <Button>Home</Button>
      {/* Planning to make change based on what Container it currently is in */}
      <h3>{props.heading}</h3>,
      {/* Move back to login page */}
      <Button>Log Out</Button> 
    </div>
  )
}

export default EventHeader;
