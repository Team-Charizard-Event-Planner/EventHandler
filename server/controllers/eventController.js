const db = require("../schemas/schema");

const eventController = {};

// create new event
eventController.create = (req, res, next) => {
  // input data on request body
  const { title, date, description, creator_id } = req.body;
  // sanitize

  // query string
  const query = `INSERT INTO events
  (title, date, description, creator_id)
  VALUES ($1, $2, $3, $4)
  RETURNING _id, title, date, description, creator_id;`;

  // parameters
  const params = [title, date, description, creator_id];

  // db query
  db.query(query, params)
    .then(data => {
      // send data through to next handler
      res.locals.event = data.rows[0];
      // attach isHost for subsequent handlers
      res.locals.isHost = true;
      return next();
    })
    .catch(err => {
      console.log('addEvent error', err);
      return next(err);
    });
};

// get events that user is invited to
eventController.getEvents = (req, res, next) => {
  // user_id as param
  const { userID } = req.params;
  const params = [userID];

  // query string joining attendees table with events table
  const query = `SELECT e.* FROM attendees a
  LEFT OUTER JOIN events e ON a.event_id = e._id
  WHERE user_id = $1;`;

  db.query(query, params)
    .then(data => {
      res.locals.events = data.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    })
};

// edit event

// get single event by eventID
eventController.getByID = (req, res, next) => {
  const { eventID } = req.body;
  const params = [eventID];

  const query = `SELECT * FROM events WHERE _id = $1;`;

  db.query(query, params)
    .then(data => {
      console.log('getByID data', data);
      res.locals.events = data.rows[0];
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

// get ALL Events, doesn't really have a use case
eventController.getAll = (req, res, next) => {
  const query = `SELECT * FROM events;`;

  db.query(query)
    .then(data => {
      console.log('data', data);
      res.locals.events = data.rows;
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = eventController;