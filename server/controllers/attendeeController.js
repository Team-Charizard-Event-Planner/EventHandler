const db = require("../schemas/schema");

const attendeeController = {};

// ALL attendees by event
attendeeController.getByEvent = (req, res, next) => {
  // if coming from another middleware, grab event_id from middleware
  const event_id = res.locals.event ? res.locals.event._id : req.params.event_id;

  const params = [event_id];

  // need to get event_id & join usernames
  const query = `SELECT a.event_id, a.user_id, u.username FROM attendees a
  LEFT OUTER JOIN users u ON a.user_id = u._id
  WHERE a.event_id = $1;`;
  
  db.query(query, params)
    .then(data => {
      console.log('data in attendees getByEvent', data.rows);
      res.locals.attendees = data.rows;
      return next();
    })
    .catch(err => {
      console.log('err in attendees getByEvent', err);
      return next(err);
    })
};

// comes after another middleware, adds user as a host
// TO-DO: can we integrate this into the createEvent query so we only call the database once?
attendeeController.addUserAfterCreate = (req, res, next) => {
  const { _id, creator_id } = res.locals.event;
  const isHost = res.locals.isHost;
  console.log("adding user after creation", _id, creator_id, isHost);

  const query = `INSERT INTO attendees
  (event_id, user_id, is_host)
  VALUES ($1, $2, $3)
  RETURNING event_id, user_id, is_host;`;

  const params = [_id, creator_id, isHost];

  db.query(query, params)
    .then((data) => {
      console.log("addHost data", data);

      // is this step necessary?
      res.locals.host = data.rows[0];
      res.locals.user_id = data.rows[0].creator_id;
      return next();
    })
    .catch((err) => {
      console.log("error in addHost", err);
      return next(err);
    });
};

// adds user to an event
attendeeController.addAttendee = (req, res, next) => {
  const { event_id, user_id, isHost } = req.body;

  const query = `INSERT INTO attendees
  (event_id, user_id, is_host)
  VALUES ($1, $2, $3)
  RETURNING event_id, user_id, is_host;`;

  const params = [event_id, user_id, isHost];

  db.query(query, params)
    .then((data) => {
      console.log("add Host data", data);

      // add host info
      res.locals.host = data.rows[0];
      res.locals.user_id = data.rows[0].user_id;
      return next();
    })
    .catch((err) => {
      console.log("error in addHost", err);
      return next(err);
    });
};

// toggles host on a user on an event
attendeeController.updateHost = (req, res, next) => {
  const { event_id, user_id, isHost } = req.body;

  const query = `UPDATE attendees
  (isHost)
  VALUES ($3)
  WHERE event_id = $1 AND user_id = $2
  RETURNING event_id, user_id, isHost;`;

  const params = [event_id, user_id, isHost];

  db.query(query, params)
    .then((data) => {
      console.log("update Host data", data);

      // updated host info
      res.locals.host = data.rows[0];
      res.locals.user_id = data.rows[0].user_id;
      return next();
    })
    .catch((err) => {
      console.log("error in addHost", err);
      return next(err);
    });
};

// removes user
attendeeController.removeAttendee = (req, res, next) => {
  const { event_id, user_id } = req.body;

  const query = `DELETE FROM attendees
  WHERE event_id = $1 AND user_id = $2
  RETURNING event_id, user_id;`;

  const params = [event_id, user_id];

  db.query(query, params)
    .then((data) => {
      console.log("delete attendee data", data);

      // updated host info
      res.locals.host = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log("error in delete attendees", err);
      return next(err);
    });
};

attendeeController.getAllAttendees = (req, res, next) => {
  console.log("get all attendees controller");
  const { id } = req.params;
  const params = [id];
  const query = `SELECT a.*, first_name FROM attendees a 
  LEFT OUTER JOIN users u ON a.user_id = u._id
  WHERE event_id = $1`;

  db.query(query, params)
    .then((data) => {
      console.log("getAttendee data", data);
      // is this step necessary?
      res.locals.attendees = data.rows;
      return next();
    })
    .catch((err) => {
      console.log("error in addattendee", err);
      return next(err);
    });
};

module.exports = attendeeController;
