const db = require("../schemas/schema");

const eventController = {};

eventController.create = (req, res, next) => {
  // input data on request body
  const { title, date, description, creator_id } = req.body;
  // sanitize

  // query string
  const query = `INSERT INTO events
  (title, date, description, creator_id)
  VALUES ($1, $2, $3, $4)
  RETURNING title, date, description, creator_id
  ;`;

  // parameters
  const params = [title, date, description, creator_id];

  // db query
  db.query(query, params)
    .then(data => {
      res.locals.event = data.rows[0];
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

// get ALL Events, not to be used
eventController.getAll = (req, res, next) => {
  return next();
};

// get events that user is invited to
eventController.getEvents = (req, res, next) => {
  return next();
};

eventController.getByID = (req, res, next) => {
  return next();
};

module.exports = eventController;