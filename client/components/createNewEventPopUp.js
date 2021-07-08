import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

const CreateNewEventPopUp = () => {
  const [open, setOpen] = React.useState(false);
  const userId = useSelector((state) => state.users.userId);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const title = document.getElementById("event-title").value;
    const date = document.getElementById("event-date").value;
    const description = document.getElementById("event-description").value;
    fetch("/event/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        date: date,
        description: description,
        creator_id: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("event", data.event);
        console.log("host", data.host);
      })
      .catch((err) => console.log("error in creating event", err));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create New Event +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your event details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="event-title"
            label="Event Title"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="event-date"
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="event-description"
            label="Event Description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create Event
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateNewEventPopUp;
