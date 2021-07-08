const express = require('express');
const eventController = require('../controllers/eventController');
const attendeeController = require('../controllers/attendeeController');
const itemController = require('../controllers/itemController');

const router = express.Router();

// get all events a user has been invited to
router.get("/userID/:userID", eventController.getEvents, (req, res) => {
  return res.status(200).json(res.locals.events);
});

// eventController GET ONE
// responds with { event: {}, attendees: {}, items: {} }
// can these be a single query?
router.get('/:event_id',
  eventController.getByEventID,
  attendeeController.getByEvent,
  itemController.getByEvent,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// create event
router.post(
  "/create",
  eventController.create,
  attendeeController.addUserAfterCreate,
  (req, res) => {
    return res
      .status(200)
      .json({ event: res.locals.event, host: res.locals.host });
  }
);

// edit events
// NOTE: events MUST have all non-null properties specified, 
// MUST to pass in TITLE, DATE even if not modified
router.put('/',
  eventController.updateEvent,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = router;
