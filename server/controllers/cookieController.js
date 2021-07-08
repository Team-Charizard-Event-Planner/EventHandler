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
  const { user_id, token, expiration } = req.body;
  const values = [user_id, token, expiration];
  const ssidInsert = `
  INSERT INTO sessions (user_id, token, expiration)
  VALUES ($1, $2, $3);
  `;
  console.log('in storeSSIDinDB', values, ssidInsert);
  db.query(ssidInsert, values)
    .then(data => {
      return next();
    })
    .catch(err => {
      return next(err);
    });
};
// when cookies expire delete from database ?
// delete cookies
// Note from Max: I don't think that we should do this here

// check users cookies against database
// if cookies are good to go, not redirect, send back positive response
// if cookies are not found in database, send back negative response
cookieController.checkCookies = (req, res, next) => {
  const { token } = req.body;
  const values = [token];
  cookieQuery = `
  SELECT user_id, token, expiration
  FROM sessions WHERE token = $1;
  `;
  db.query(cookieQuery, values)
    .then(result => {
      console.log('result from query: ', result);

      if (!result) {
        res.locals.token = false;
        return next({ log: "cookies are invalid" });
      }
      else {
        res.locals.token = true;
        return next();
      }
    });

}
