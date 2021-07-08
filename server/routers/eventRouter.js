const express = require('express');
const eventController = require('../controllers/eventController');
const attendeeController = require('../controllers/attendeeController');

const router = express.Router();

// get all events a user has been invited to
router.get('/:userID',
  eventController.getEvents,
  (req, res) => {
    return res.status(200).json(res.locals.events)
  }
);

// get specific
// eventController GET ONE
router.get('/:id',
  (req, res) => {
    return res.status(200).json('get one event');
  }
);

// create event
router.post('/create',
  eventController.create,
  attendeeController.addUserAfterCreate,
  (req, res) => {
    return res.status(200).json({ event: res.locals.event, host: res.locals.host });
  }
);

// edit events
// eventController UPDATE
router.put('/',
  (req, res) => {
    return res.status(200).json('edit event');
  }
);

module.exports = router;