import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";

const AddAttendee = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [checked, setCheck] = React.useState(false);
  const eventId = useSelector((state) => state.events.eventIndexAndId[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const username = document.getElementById("invite-username").value;
    fetch("/attendee/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_id: eventId,
        isHost: checked,
        username: username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("event", data);
        dispatch({ type: "ADD_ATTENDEE", payload: data })
      })
      .catch((err) => console.log("error in creating event", err));
    setOpen(false);
    setCheck(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Invite Attendee
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Attendee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Who would you like to invite?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="invite-username"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField onClick={() => setCheck(!checked)}
            autoFocus
            margin="dense"
            id="event-host"
            label="Host Priviledges?"
            type="checkbox"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Invite
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddAttendee;
