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
});

module.exports = app;