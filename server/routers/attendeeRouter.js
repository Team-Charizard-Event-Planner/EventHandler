const express = require('express');
const attendeeController = require('../controllers/attendeeController');
const itemController = require('../controllers/itemController');
const userController = require('../controllers/userController');

const router = express.Router();

// get list of attendees for an event by eventId
router.get('/:event_id',
  attendeeController.getByEvent,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// add attendee to event "invite"
router.post('/',
  userController.getByUsername,
  attendeeController.addAttendee,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// update attendees host status
router.put('/',
  attendeeController.updateHost,
  userController.getByID,
  (req, res) => {
    return res.status(200).json(res.locals.host);
  }
);

// remove attendee
// can these be ONE query?
router.delete('/',
  attendeeController.removeAttendee,
  itemController.unclaimUserItemsFromEvent,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = router;
