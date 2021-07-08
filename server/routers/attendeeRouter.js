const express = require("express");
const attendeeController = require("../controllers/attendeeController");

const router = express.Router();

// get list of attendees for an event
router.get("/:id", attendeeController.getAllAttendees, (req, res) => {
  return res.status(200).json(res.locals.attendees);
});

// add attendee to event "invite"
router.post("/", attendeeController.addAttendee, (req, res) => {
  return res.status(200).json(res.locals.host);
});

// update attendees host status
router.put("/", attendeeController.updateHost, (req, res) => {
  return res.status(200).json(res.locals.host);
});

// remove attendee
router.delete("/", (req, res) => {
  return res.status(200).json("removed attendee");
});

module.exports = router;
