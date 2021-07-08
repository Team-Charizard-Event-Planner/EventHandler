const db = require("../schemas/schema");

const eventController = {};

eventController.create = (req, res, next) => {
  // input data on request body
  const { title, date, description, creator_id } = req.body;
  // sanitize
  console.log(req.body);
  // query string
  const query = `INSERT INTO events
  (title, date, description, creator_id)
  VALUES ($1, $2, $3, $4)
  RETURNING _id, title, date, description, creator_id;`;

  // parameters
  const params = [title, date, description, creator_id];

  // db query
  db.query(query, params)
    .then((data) => {
      // send data through to next handler
      res.locals.event = data.rows[0];
      // attach isHost for subsequent handlers
      res.locals.isHost = true;
      return next();
    })
    .catch((err) => {
      console.log("addEvent error", err);
      return next(err);
    });
};

// get events that user is invited to
eventController.getEvents = (req, res, next) => {
  // user_id as param
  const { userID } = req.params;
  const params = [userID];

  // query string joining attendees table with events table
  const query = `SELECT e.*
  FROM attendees a
  LEFT OUTER JOIN events e ON a.event_id = e._id
  WHERE user_id = $1;`;

  db.query(query, params)
    .then((data) => {
      res.locals.events = data.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

eventController.getByID = (req, res, next) => {
  const { userID } = req.body;

  return next();
};

// get ALL Events, not to be used
eventController.getAll = (req, res, next) => {
  return next();
};

module.exports = eventController;
