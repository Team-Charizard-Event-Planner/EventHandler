<<<<<<< HEAD
const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routers/userRouter");

app.use(express.json());

app.use("/", (req, res) => {
  console.log("sending html");
  return res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.listen(3000, () => {
  console.log("eventHandler knows your secrets :)");
});

app.use("/api/user", userRouter);


app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    message: 'An error occurred',
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(500).json(errorObj.message);
=======
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRouter = require('./routers/auth');
const eventRouter = require('./routers/event');

const app = express();
const PORT = 3000;

// processing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// routes
// static routes

// /auth for user authentication pathways
app.use('/auth', authRouter);

// /event for event fetching & creation
app.use('/event', eventRouter);

// should event include item? should item be separate?


// serve HTML
app.get('/', (req, res) => {
  console.log('serve HTML');
  return res.sendFile(path.resolve(__dirname, '../index.html'));
});

// 404
app.use((req, res) => {
  console.log('404');
  return res.sendStatus(404);
})

// global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    status: 500,
    log: 'Unknown Error Encountered',
    message: 'Error Encountered'
  };

  const errorObject = { ...defaultErr, ...err };

  console.log(errorObject.log);
  res.status(errorObject.status).send(errorObject.message);
});

app.listen(PORT, () => {
  console.log('Event Handler knows all');
>>>>>>> 420c396abcbd6e5ed174bdb4aa09ace56ca89066
});

module.exports = app;