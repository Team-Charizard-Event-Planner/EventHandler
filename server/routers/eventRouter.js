const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();


// get all events a user has been invited to
router.get('/',
  eventController.getEvents,
  (req, res) => {
    return res.status(200).json('get all events')
  }
);

// get specific
router.get('/:id',
// eventController GET ONE
(req, res) => {
  return res.status(200).json('get one event');
  });

// create event
router.post('/create',
  eventController.create,
  (req, res) => {
    return res.status(200).json(res.locals.event);
});

// edit events
router.put('/',
  // eventController UPDATE
  (req, res) => {
    return res.status(200).json('edit event');
});

module.exports = router;