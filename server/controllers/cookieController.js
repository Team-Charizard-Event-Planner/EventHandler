const db = require("../schemas/schema.js");
const cookieController = {};

// We need cookies to :

// set the cookie as a unique ID
cookieController.setSSIDCookie = (req, res, next) => {
  const { username, password } = req.body;
  const values = [username, password];
  const idQuery = `
  SELECT _id 
  FROM users
  WHERE username = $1;
  `;
  db.query(idQuery, values).then((data) => {
    res.cookie("ssid", data.rows[0]._id);
  });

  return next();
};
// pass back on cookies object
// store sessionID in database
cookieController.storeSSIDinDB = (req, res, next) => {
  const { username, _id } = req.body;
  const values = [username, _id];
  const ssidInsert = `
  INSERT _id 
  INTO sessions
  `;
  console.log("in storeSSIDinDB", values, ssidInsert);
  return next();
};
// when cookies expire delete from database ?
// delete cookies

// check users cookies against database
// if cookies are good to go, not redirect, send back positive response
// if cookies are not found in database, send back negative response
